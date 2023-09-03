import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"


const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati dolore sed, iusto nemo, reiciendis ipsa perspiciatis magnam et quidem illum error! Enim amet deserunt laborum commodi, et culpa? Saepe, laudantium.
    </Paragrafo>
    <GithubSecao>
    <img height="180em" src="https://github-readme-stats.vercel.app/api?username=vluigimartins&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=vluigimartins&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
    </section>
)

export default Sobre
