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
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";

import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export default function ContactForm() {
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
    <Container bg="#FFFFFF" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        {" "}
        <Box
          bg="#1D4044"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Heading>Contact Us</Heading>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                      >
                        <FormControl id="name">
                          <FormLabel>Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
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
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
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
                          <FormLabel>Message</FormLabel>
                          <Textarea
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

                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#1D4044"
                            color="white"
                            className="submit-btn"
                            type="submit"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>

                      <ToastContainer />
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

// import { MdEmail, MdOutlineEmail } from "react-icons/md";
// import { BsDiscord, BsPerson } from "react-icons/bs";

// import { useForm } from "react-hook-form";

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const { name, MdEmail, message } = data;
//   };
//   return (
//     <Container bg="#FFFFFF" maxW="full" mt={0} centerContent overflow="hidden">
//       <Flex>
//         <Box
//           bg="#1D4044"
//           color="white"
//           borderRadius="lg"
//           m={{ sm: 4, md: 16, lg: 10 }}
//           p={{ sm: 5, md: 5, lg: 16 }}
//         >
//           <Box p={4}>
//             <Heading>Contact Us</Heading>
//             <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//               <WrapItem>
//                 <Box bg="white" borderRadius="lg">
//                   <Box m={8} color="#0B0E3F">
//                     <VStack spacing={5}>
//                       <FormControl id="name">
//                         <FormLabel>Your Name</FormLabel>
//                         <InputGroup borderColor="#E0E1E7">
//                           <InputLeftElement
//                             pointerEvents="none"
//                             children={<BsPerson color="gray.800" />}
//                           />
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="email">
//                         <FormLabel>Email</FormLabel>
//                         <InputGroup borderColor="#E0E1E7">
//                           <InputLeftElement
//                             pointerEvents="none"
//                             children={<MdOutlineEmail color="gray.800" />}
//                           />
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="message">
//                         <FormLabel>Message</FormLabel>
//                         <Textarea
//                           borderColor="gray.300"
//                           _hover={{
//                             borderRadius: "gray.300",
//                           }}
//                           placeholder="message"
//                         />
//                       </FormControl>
//                       <FormControl id="name" float="right">
//                         <Button
//                           variant="solid"
//                           bg="#1D4044"
//                           color="white"
//                           _hover={{}}
//                         >
//                           Send Message
//                         </Button>
//                       </FormControl>
//                     </VStack>
//                   </Box>
//                 </Box>
//               </WrapItem>
//             </Wrap>
//           </Box>
//         </Box>
//       </Flex>
//     </Container>
//   );
// }
