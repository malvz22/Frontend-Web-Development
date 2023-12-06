import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export default function HeroesDisplay() {
  const [heroes, setHeroes] = useState([]);
  const [formHero, setFromHero] = useState({ name: "", color: "" });
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    try {
      const res = await axiosInstance.get("/superheroes");
      setHeroes(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const setEditSelected = (id, formik) => {
    setSelectedId(id);
    const [hero] = heroes.filter((hero) => hero.id === id);
    formik.setFieldValue("name", hero.name);
    formik.setFieldValue("color", hero.color);
    // setFromHero({ name: hero.name, color: hero.color });
  };

  const deleteHero = async (id) => {
    if (!confirm("Delete hero?")) {
      return;
    }
    await axiosInstance.delete(`/superheroes/${id}`);
    setHeroes((prev) => {
      return prev.filter((hero) => hero.id !== id);
    });
  };

  const validationScheme = Yup.object().shape({
    name: Yup.string()
      .required("Hero name cannot be empty!")
      .min(3, "Hero name must be longer than 3 characters!"),
    color: Yup.string().required("Hero color cannot be empty"),
  });

  const handleSubmitHero = async (value, form) => {
    event.preventDefault();
    if (selectedId === null) {
      const res = await axiosInstance.post("/superheroes", value);
      setHeroes((prev) => {
        return [...prev, res.data];
      });
    } else {
      const res = await axiosInstance.put(`/${selectedId}`, formHero);
      setHeroes((prev) => {
        const indexEdited = prev.findIndex((hero) => hero.id === selectedId);
        const copyPrev = [...prev];
        copyPrev[indexEdited] = res.data;
        return copyPrev;
      });
    }
    form.resetForm();
    setSelectedId(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFromHero((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", color: "" }}
        onSubmit={handleSubmitHero}
        validationSchema={validationScheme}
      >
        <Box my={"24px"}>
          <Heading>Heroes</Heading>
          <UnorderedList>
            {heroes.map((hero) => (
              <ListItem key={hero.id}>
                {hero.name} ({hero.color})
                <Button
                  onClick={() => {
                    setEditSelected(hero.id);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => deleteHero(hero.id)} colorScheme="red">
                  Delete
                </Button>
              </ListItem>
            ))}
          </UnorderedList>

          {(formikProps) => {
            return (
              <Form>
                <Box mt={2}>
                  <FormControl
                    isInvalid={
                      formikProps.touched.name && formikProps.errors.name
                    }
                  >
                    <FormLabel>Hero Name</FormLabel>
                    <Input
                      value={formikProps.values.name}
                      onChange={formikProps.handleChange}
                      name="name"
                      placeholder="Hero Name"
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Color</FormLabel>
                    <Input
                      value={formikProps.values.color}
                      onChange={formikProps.handleChange}
                      name="color"
                      placeholder="Hero Color"
                    ></Input>
                  </FormControl>
                  <Button mt={2} type="submit">
                    Submit
                  </Button>
                  <Button mt={2} onClick={() => setSelectedId(null)}>
                    Cancel Edit
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Box>
      </Formik>
    </>
  );
}
