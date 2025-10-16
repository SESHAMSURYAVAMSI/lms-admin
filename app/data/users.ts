export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  designation: string;
  affiliation: string;
  country: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Subhash Sinha",
    email: "abc@gmail.com",
    mobile: "8952323333",
    designation: "Lorem Ipsum",
    affiliation: "AIIMS, Delhi",
    country: "India",
  },
  {
    id: "2",
    name: "Dr Amit Lal",
    email: "abc@gmail.com",
    mobile: "9886556666",
    designation: "Lorem Ipsum",
    affiliation: "AIIMS, Delhi",
    country: "India",
  },
  {
    id: "3",
    name: "Dr Ayush Garg",
    email: "abc@gmail.com",
    mobile: "241582235",
    designation: "Lorem Ipsum",
    affiliation: "AIIMS, Delhi",
    country: "India",
  },
];
