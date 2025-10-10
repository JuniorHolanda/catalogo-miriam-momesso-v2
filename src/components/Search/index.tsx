import Link from "next/link";
import { ScontainerInput, Sul, Sform, Slink } from "./search.styles";

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
            <h3>Product title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium fugiat quo magnum.
            </p>
            <div>
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
