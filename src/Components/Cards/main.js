import { useState, useEffect } from "react";
import {
  Body,
  CardBody,
  BackgroundImage,
  Figure,
  Image,
  InformationBox,
  NameBox,
  TextBox,
  P,
  Span,
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
      {Data.map((item) => {
        return (
          <CardBody>
            <BackgroundImage>
              <Figure>
                <Image src={item.image ? item.image : Hogwards} alt="" />
              </Figure>
            </BackgroundImage>
            <InformationBox>
              <NameBox>
                <h2>{item.name}</h2>
              </NameBox>
              <TextBox>
                <P>
                  House: <Span>{item.house ? item.house : "Unkown"}</Span>
                </P>
                <P>
                  Gender: <Span>{item.gender}</Span>
                </P>
                <P>
                  Age:
                  <Span>
                    {item.yearOfBirth ? 2022 - item.yearOfBirth : "Unkown"}
                  </Span>
                </P>
                <P>
                  Wizard: <Span>{item.wizard ? "Yes" : "No"}</Span>
                </P>
                <P>
                  Species: <Span>{item.species ? item.species : "Unkown"}</Span>
                </P>
                <P>
                  Patronus:
                  <Span>{item.patronus ? item.patronus : "Unkown"}</Span>
                </P>
              </TextBox>
            </InformationBox>
          </CardBody>
        );
      })}
    </Body>
  );
}
