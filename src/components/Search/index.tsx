import Link from "next/link";
import { ScontainerInput, Sul, Sform, Slink } from "./search.styles";
import { SButton } from "../ui/Button/button.styles";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function Search() {
  return (
    <Sform>
      <ScontainerInput>
        <label htmlFor="search">Digite sua busca</label>
        <input
          type="text"
          name="q"
          id="search"
          placeholder="Pesquisar produtos"
        />
      </ScontainerInput>
      <Sul>
        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Bag Max</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
              <SButton>Ver Produto</SButton>
            </div>
            <div className="content">
              <span>
                <CiHeart />
                <h3>Bolsas</h3>
              </span>
              <div className="images">
                <div>
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
                <div className="imgContainer">
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slink>
        </li>

        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Bag Max</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
              <SButton>Ver Produto</SButton>
            </div>
            <div className="content">
              <span>
                <CiHeart />
                <h3>Bolsas</h3>
              </span>
              <div className="images">
                <div>
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
                <div className="imgContainer">
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slink>
        </li>

        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Bag Max</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
              <SButton>Ver Produto</SButton>
            </div>
            <div className="content">
              <span>
                <CiHeart />
                <h3>Bolsas</h3>
              </span>
              <div className="images">
                <div>
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
                <div className="imgContainer">
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slink>
        </li>

        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Bag Max</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
              <SButton>Ver Produto</SButton>
            </div>
            <div className="content">
              <span>
                <CiHeart />
                <h3>Bolsas</h3>
              </span>
              <div className="images">
                <div>
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
                <div className="imgContainer">
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slink>
        </li>

        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Bag Max</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
              <SButton>Ver Produto</SButton>
            </div>
            <div className="content">
              <span>
                <CiHeart />
                <h3>Bolsas</h3>
              </span>
              <div className="images">
                <div>
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
                <div className="imgContainer">
                  <img
                    src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slink>
        </li>
      </Sul>
    </Sform>
  );
}
