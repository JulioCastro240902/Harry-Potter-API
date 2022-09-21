import { useState, useEffect } from "react";
import {
  Body,
  CardBody,
  BackgroundImage,
  Figure,
  Image,
  InformationBox,
} from "./styles.js";
import Hogwards from "../../assets/Hogwards.png";

import axios from "axios";

export default function Cards(props) {
  const [Data, setData] = useState([]);

  const url = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, []);

  return (
    <Body>
      <CardBody>
        <BackgroundImage>
          <Figure>
            <Image src={Hogwards} alt="" />
          </Figure>
        </BackgroundImage>
        <InformationBox>
          <p>{props.name}</p>
          <p>{props.house}</p>
          <p>{props.age}</p>
          <p>{props.birthday}</p>
          <p>{props.Spicies}</p>
          <button>See more</button>
        </InformationBox>
      </CardBody>
    </Body>
  );
}
