import Link from "next/link";
import { ScontainerInput, Sul, Sform, Slink } from "./search.styles";
import { SButton } from "../ui/Button/button.styles";

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
              <h3>Product title</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
              <SButton>Ver Produto</SButton>
            </div>
            <div className="imgContainer">
              <img
                src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                alt=""
              />
            </div>
          </Slink>
        </li>

        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Product title</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
            </div>
            <div className="imgContainer">
              <img
                src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                alt=""
              />
            </div>
          </Slink>
        </li>

        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Product title</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
            </div>
            <div className="imgContainer">
              <img
                src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                alt=""
              />
            </div>
          </Slink>
        </li>
        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Product title</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
            </div>
            <div className="imgContainer">
              <img
                src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                alt=""
              />
            </div>
          </Slink>
        </li>

        <li>
          <Slink href={"#"}>
            <div className="text">
              <h3>Product title</h3>
              <p>
                Accusantium fugiat quo magnum. Asugat maliagun sampum parafun.
              </p>
            </div>
            <div className="imgContainer">
              <img
                src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg"
                alt=""
              />
            </div>
          </Slink>
        </li>

      </Sul>
    </Sform>
  );
}
