import '../model/project';

export class ProjectsData {
  static policeWeb: Project = {
    title: 'Cadeia de Custódia Eletrônica',
    description: [
      'Estou atualmente envolvida no desenvolvimento de um site como parte de um projeto de iniciação científica promovido pelo IFFluminense. O objetivo é melhorar a gestão das evidências criminais na rede da polícia técnico-científica civil de Itaperuna, facilitando seu controle desde a coleta até sua apresentação em processos legais. O projeto visa garantir a integridade e a segurança das evidências em todas as etapas do processo.'
    ],
    tecnologies: [
      'Angular',
      'Angular Material',
      'Firebase',
    ],
    images: [],
    appleUrl: '',
    googleUrl: '',
    lineWidth: 20,
  };

  static appBizu: Project = {
    title: 'App Bizucash',
    description: [
      'O Bizucash atua como um marketplace, conectando postos de combustível e lojas de varejo em um ecossistema de distribuição e resgate de pontos. Com ele, os usuários têm acesso a uma ampla variedade de produtos disponibilizados por empresas parceiras.',
      'A cada compra por dentro do app é gerado um código de resgate para a retirada do produto, além de pontos que podem ser usados como desconto em compras futuras. Além disso, o app oferece funcionalidades complementares que enriquecem a experiência do usuário, como um carrinho, campanhas promocionais, sorteios exclusivos, um mapa para localizar as empresas parceiras e um chat para suporte direto.',
    ],
    tecnologies: [
      'Flutter',
      'Material Design',
    ],
    images: [],
    appleUrl: 'https://apps.apple.com/br/app/bizucash/id6497949682',
    googleUrl: 'https://play.google.com/store/apps/details?id=com.bizucash.app_cliente',
    lineWidth: 60,
  };

  static pdvBizu: Project = {
    title: 'PDV Bizucash',
    description: [
      'O PDV Bizucash é um complemento ao app Bizucash, desenvolvido para atender às necessidades dos entregadores e atendentes das lojas e postos que aderiram ao ecossistema da empresa Bizucash.',
      'Com um design focado na simplicidade e usabilidade, ele facilita o processo de validação das compras dos clientes, guiando o usuário através de uma navegação que deixa claro o que fazer em cada etapa. Essa abordagem garante que qualquer usuário, independente de seu nível de familiaridade com tecnologia, possa utilizar o app de forma intuitiva e eficiente.',
    ],
    tecnologies: [
      'Flutter ',
      'Material Design',
    ],
    images: [],
    appleUrl: 'https://apps.apple.com/br/app/pdv-bizucash/id6498924403',
    googleUrl: 'https://play.google.com/store/apps/details?id=com.bizucash.app_frentista',
    lineWidth: 60,
  };

  static webBizu: Project = {
    title: 'Site Bizucash',
    description: [
      'O Site Bizucash é uma plataforma voltada para os administradores das lojas e postos parceiros, complementando os aplicativos Bizucash e PDV Bizucash. Através do site, os administradores podem aceitar ou recusar pedidos de compra feitos no app, gerenciar as configurações da empresa, cadastrar produtos e categorias, lançar promoções e sorteios, além de realizar os pagamentos necessários. A plataforma oferece controle total das operações, garantindo uma gestão prática e eficiente para os parceiros do ecossistema.',
    ],
    tecnologies: [
      'Angular',
      'Angular Material',
    ],
    images: [],
    appleUrl: '',
    googleUrl: '',
    lineWidth: 60,
  };
}
