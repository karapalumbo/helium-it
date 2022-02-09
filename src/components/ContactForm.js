import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./ContactForm.css";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Tag,
  TagLeftIcon,
  Button,
  IconButton,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsPerson, BsDiscord } from "react-icons/bs";
import PrimaryButton from "./PrimaryButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Your message has been sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const SERVICE_ID = "service_v3la1z9";
  const TEMPLATE_ID = "template_zecwtx8";
  const USER_ID = "user_UKXzrf6YV0r5bG2MV4oFY";

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container centerContent>
      {/* <Heading mt="4" mb="4">
        Contact Us
      </Heading> */}
      <Flex width="100%">
        {" "}
        <Box color="#0B0E3F" display="inline-block" width="75%" mt={50}>
          <Heading mt="4" mb="10">
            Contact Us
          </Heading>
          <Box>
            <Tag mb="5" backgroundColor="white" size="20px">
              <TagLeftIcon as={MdPhone} />
              888-888-8888
            </Tag>
            <Tag mb="5" backgroundColor="white" size="20px">
              <TagLeftIcon as={MdEmail} />
              info@heliumit.net
            </Tag>
            <Tag mb="5" backgroundColor="white" size="20px">
              <TagLeftIcon as={BsDiscord} />
              <Link href={"https://discord.gg/ZjugCrUvza"}>Discord</Link>
            </Tag>
          </Box>
        </Box>
        <Box color="white" borderRadius="lg" width="100%">
          <Box color="#0B0E3F" display="inline-block">
            {/* <Heading mt="4" mb="4">
              Contact Us
            </Heading> */}
            <Box mt="6" mb="4">
              <VStack spacing={4}>
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <FormControl id="name">
                    <FormLabel marginBottom="0">Name</FormLabel>
                    <InputGroup
                      borderColor="#E0E1E7"
                      marginBottom="3"
                      width="280px"
                    >
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input
                        type="text"
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less.",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Name"
                      ></Input>
                    </InputGroup>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </FormControl>

                  <FormControl id="email">
                    <FormLabel marginBottom="0">Email</FormLabel>
                    <InputGroup borderColor="#E0E1E7" marginBottom="3">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                      ></Input>
                    </InputGroup>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address.
                      </span>
                    )}
                  </FormControl>

                  <FormControl id="message">
                    <FormLabel marginBottom="0">Message</FormLabel>
                    <Textarea
                      marginBottom="3"
                      borderColor="gray.300"
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></Textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message.
                      </span>
                    )}
                  </FormControl>

                  <FormControl id="name">
                    <PrimaryButton text="Send Message" />
                  </FormControl>
                </form>

                <ToastContainer />
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactForm;
