import mongoose from "mongoose";
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

// Step 3: Create a Mongoose Model based on the schema
const Form = mongoose.model("Form", formSchema);
export default Form;
