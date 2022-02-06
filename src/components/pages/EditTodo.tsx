import { FC } from "react";
import { useParams } from "react-router-dom";
import Back from "../Back";
import Content from "../Content";
import Footer from "../Footer";

const EditTodo: FC = () => {
  const params = useParams();

  return (
    <>
      <Back />
    </>
  );
};

export default EditTodo;
