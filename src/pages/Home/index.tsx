import * as S from './styles'

export function Home() {
  return (
    <S.Section>
      <div>
        <h3>Notícia de Lançamento de Produto: "A Empresa X Anuncia o Novo Smartphone Y: A Empresa X revelou seu
mais recente lançamento, o Smartphone Y, equipado com uma câmera de alta resolução, processador de última
geração e recursos de inteligência artificial. Saiba mais sobre as especificações e recursos deste dispositivo
inovador."</h3>
      </div>
      <div className="2">
      Análise de Gadget: "Análise do Fone de Ouvido Z: Testamos o Fone de Ouvido Z para descobrir se ele entrega
o som de alta qualidade prometido pelo fabricante. Desde o cancelamento de ruído até a vida útil da bateria,
examinamos todos os aspectos deste acessório."
      </div>
      <div className="3">
      Artigo sobre Inteligência Artificial: "O Papel da Inteligência Artificial na Medicina: Exploramos como a IA
está revolucionando o campo médico, desde diagnósticos mais precisos até a descoberta de tratamentos
personalizados. Veja exemplos de como os algoritmos estão transformando a saúde."
      </div>
      <div className="4">
      Notícia de Segurança Cibernética: "Vazamento de Dados na Empresa ABC: A Empresa ABC enfrenta um
vazamento de dados que expôs informações pessoais de milhares de clientes. Especialistas em segurança
cibernética comentam sobre as possíveis ramificações e medidas para prevenir futuros incidentes."
      </div>
    </S.Section>
  )
}
