const questions = [
 {
    "enunciado": "A principal finalidade do setor de administração de recursos materiais na empresa restringe-se a controlar o fluxo de entrada de materiais.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "O objetivo da administração de materiais é muito mais amplo: envolve prover a organização dos materiais necessários (quantidade certa, qualidade certa, momento certo), e não apenas controlar a portaria/entrada [1]. Analogia: É como um chef de cozinha que não apenas recebe as compras, mas planeja o cardápio, gerencia a despensa e garante que não falte sal na hora do serviço."
  },
  {
    "enunciado": "As atividades básicas de administração de materiais e patrimônio incluem aquisição, distribuição e desfazimento de bens, focando na otimização de recursos e minimização de desperdícios.",
    "correta": "C",
    "tema": "Administração de Materiais",
    "justificativa": "A gestão cobre todo o ciclo de vida do material: desde a compra (aquisição), passando pelo uso/logística (distribuição) até o descarte ou alienação (desfazimento) [2]. Conceito: Envolve gerenciar o fluxo físico e de informações para maximizar a eficiência (fazer mais com menos)."
  },
  {
    "enunciado": "O setor de administração de materiais é responsável por buscar o baixo custo de aquisição e armazenamento de itens, mantendo a consistência de qualidade.",
    "correta": "C",
    "tema": "Administração de Materiais",
    "justificativa": "O gestor deve equilibrar o trinômio: Custo x Qualidade x Prazo. O objetivo é comprar barato e armazenar com eficiência, sem sacrificar a qualidade necessária para a operação [3]."
  },
  {
    "enunciado": "Uma função básica da administração de materiais é garantir a aquisição de produtos de menor preço, independentemente da qualidade ou da necessidade da organização.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "Preço não é tudo. Comprar material de baixa qualidade que quebra rápido gera prejuízo (retrabalho, parada de produção). O foco deve ser no 'custo-benefício' e na adequação ao uso, não apenas no menor preço absoluto [4]. Analogia: Comprar um pneu de bicicleta para colocar em um caminhão só porque é mais barato."
  },
  {
    "enunciado": "A administração de materiais deve planejar, controlar e distribuir recursos de forma eficiente, atendendo às necessidades com menor custo e melhor qualidade.",
    "correta": "C",
    "tema": "Administração de Materiais",
    "justificativa": "Esta é a definição clássica de eficiência na gestão de suprimentos: atender a demanda interna (nível de serviço) otimizando os gastos [4], [5]."
  },
  {
    "enunciado": "A área de administração de materiais contribui para o planejamento da produção garantindo o abastecimento de insumos necessários no momento certo.",
    "correta": "C",
    "tema": "Administração de Materiais",
    "justificativa": "Sem materiais, a produção para. A gestão de materiais atua como garantidora da continuidade operacional, evitando rupturas na linha de produção [6], [7]. Analogia: É o assistente cirúrgico que garante que o bisturi esteja na mão do médico no segundo exato que ele pede."
  },
  {
    "enunciado": "A gestão de materiais não interage com a área financeira, pois esta trabalha exclusivamente com questões de fluxo de caixa e receitas.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "Estoques representam dinheiro parado. A gestão de materiais impacta diretamente o fluxo de caixa (compras) e o capital de giro (estoque). As áreas devem andar de mãos dadas [6], [7]."
  },
  {
    "enunciado": "A interação entre o setor de administração de materiais e a área de produção visa evitar interrupções no processo produtivo devido à falta de recursos.",
    "correta": "C",
    "tema": "Administração de Materiais",
    "justificativa": "O principal risco operacional é a falta de insumos (stockout). A sintonia entre materiais e produção é vital para manter a fábrica rodando [8], [7]."
  },
  {
    "enunciado": "A classificação de materiais deve obedecer a regras rígidas e universais, não se admitindo alterações ou personalizações conforme a necessidade da organização.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "A classificação deve ser flexível e adaptável (*tailor-made*). Cada empresa tem necessidades específicas; um sistema rígido demais pode burocratizar e não atender à realidade do negócio [7]. Conceito: A classificação serve à empresa, não o contrário."
  },
  {
    "enunciado": "Material ocioso é definido como aquele cujo rendimento é precário ou cuja manutenção é onerosa, não justificando sua utilização.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "Isso descreve material *antieconômico* ou *irrecuperável*. Material **ocioso** é aquele que está em boas condições, mas não está sendo usado no momento (está parado, disponível) [9]. Analogia: Um carro na garagem que ninguém usa é ocioso; um carro que gasta mais gasolina do que vale é antieconômico."
  },
  {
    "enunciado": "Perecibilidade é o atributo dos materiais sujeitos a modificações químicas ou físicas, que se deterioram ou perdem a característica normal de uso com o tempo.",
    "correta": "C",
    "tema": "Administração de Materiais",
    "justificativa": "Perecibilidade refere-se à vida útil do material. Se ele estraga, vence ou perde propriedades (físicas/químicas) com o tempo, ele é perecível [10]. Exemplo: Alimentos, vacinas ou cola que seca."
  },
  {
    "enunciado": "A gestão de materiais engloba compras, recebimento, armazenagem e distribuição, mas o controle dessas atividades cabe exclusivamente à gestão de custos.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "O controle é inerente à própria gestão de materiais (controle de estoque, inventário). A gestão de custos analisa os valores, mas a gestão física e administrativa do material é responsabilidade da área de Materiais [11]."
  },
  {
    "enunciado": "O consumo sazonal apresenta variações de demanda devido a produtos que se tornam obsoletos por inovações tecnológicas.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "Confusão de conceitos. **Sazonalidade** refere-se a variações cíclicas por época (ex: vender mais sorvete no verão). **Obsolescência** é perda de valor por inovação tecnológica. São fenômenos distintos [12]."
  },
  {
    "enunciado": "A operacionalização dos sistemas de reposição de estoque não é atribuição do setor de administração de materiais.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "Calcular o Ponto de Pedido e acionar a reposição é uma das funções centrais da gestão de estoques (dentro de Adm. de Materiais) para garantir que não falte item [13]."
  },
  {
    "enunciado": "O combate à obsolescência, a reutilização de materiais e a padronização de componentes são consideradas boas práticas na gestão de materiais.",
    "correta": "C",
    "tema": "Administração de Materiais",
    "justificativa": "Padronizar reduz a variedade (menos itens para gerir). Reutilizar economiza. Combater obsolescência evita perda de capital investido. Tudo isso gera eficiência [14]."
  },
  {
    "enunciado": "A demanda que apresenta picos de consumo em épocas conhecidas é classificada como demanda irregular.",
    "correta": "E",
    "tema": "Administração de Materiais",
    "justificativa": "Se os picos ocorrem em épocas *conhecidas* e repetitivas, trata-se de **sazonalidade**. Demanda irregular é aquela imprevisível, sem padrão definido [15]."
  },
  {
    "enunciado": "A teoria da administração científica visava determinar os melhores métodos para realizar tarefas e selecionar/treinar os colaboradores de forma científica.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Taylor buscou substituir o improviso (*empirismo*) pela ciência (*ORT* - Organização Racional do Trabalho). O foco era achar a 'one best way' (melhor maneira) de fazer a tarefa e treinar o operário para executá-la [15], [16]."
  },
  {
    "enunciado": "A padronização de procedimentos é amplamente encorajada e praticada na abordagem da administração científica.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Para garantir a eficiência máxima, ferramentas, movimentos e processos precisavam ser padronizados. Sem padrão, não há como medir ou controlar o tempo de produção [16], [17]."
  },
  {
    "enunciado": "A abordagem básica da escola da administração científica fundamenta-se na ênfase colocada na estrutura organizacional.",
    "correta": "E",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "A Administração Científica (Taylor) foca nas **tarefas** (chão de fábrica). Quem foca na **estrutura** é a Teoria Clássica (Fayol) e a Burocracia (Weber) [18]."
  },
  {
    "enunciado": "Taylorismo e Fordismo possuem em comum o foco na alta especialização do trabalho no processo produtivo.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Ambos defendem a divisão do trabalho ao extremo. O operário faz apenas uma pequena parte da tarefa repetidamente (especialização), o que aumenta a velocidade e produtividade [18], [19]. Analogia: Como na linha de montagem do filme 'Tempos Modernos' de Chaplin."
  },
  {
    "enunciado": "O estudo dos tempos e movimentos foi o fundamento da teoria da burocracia, baseada nos estudos de Weber.",
    "correta": "E",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Tempos e Movimentos (*Motion-Time Study*) é a base de **Taylor** (Administração Científica). Weber focou na autoridade, regras e formalidade (Burocracia) [20]."
  },
  {
    "enunciado": "Segundo a Escola da Administração Científica, incentivos financeiros são considerados insuficientes para garantir alto nível de produtividade.",
    "correta": "E",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Para Taylor, o homem é o *Homo Economicus*: motivado essencialmente por dinheiro. Ele acreditava que pagar por produção (peça produzida) era o principal motor da eficiência [21]."
  },
  {
    "enunciado": "Segundo a Escola da Administração Científica, o homem é um ser racional, capaz de escolher a alternativa que maximiza seus resultados econômicos.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Conceito do *Homo Economicus*. O trabalhador é visto como uma peça racional que calcula o esforço versus a recompensa financeira [22]."
  },
  {
    "enunciado": "A administração científica tem seu principal foco nas pessoas e nas relações interpessoais, deixando a gestão de tarefas em segundo plano.",
    "correta": "E",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "É o oposto. O foco é total nas **tarefas** e processos mecânicos (*Engenharia*). As pessoas eram vistas como extensões das máquinas. Quem foca nas pessoas é a Teoria das Relações Humanas [23]."
  },
  {
    "enunciado": "Um dos objetivos do gestor que adota a administração científica é aumentar o número de tarefas realizadas em um determinado período (produtividade).",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Eficiência para Taylor é fazer mais em menos tempo. Aumentar a produção (output) por unidade de tempo é a meta central [24]."
  },
  {
    "enunciado": "A divisão do trabalho na administração científica visa ao aumento da produtividade pelo fato de o trabalhador se tornar um especialista na sua atividade.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Quanto mais você repete uma única tarefa pequena, melhor e mais rápido você fica nela (*Learning by doing* restrito). A especialização leva à eficiência operacional [25]."
  },
{
    "enunciado": "O estudo do tempo necessário para a realização de uma tarefa, com sua decomposição em elementos básicos, constitui uma das premissas da escola do pensamento sistêmico.",
    "correta": "E",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "O estudo de tempos e movimentos (Time and Motion Study) é a pedra fundamental da **Administração Científica** de Taylor, e não da Sistêmica. Conceito: Taylor buscava a eficiência na 'chão de fábrica' cronometrando tarefas para eliminar desperdícios."
  },
  {
    "enunciado": "Divisão de tarefas e especialização do trabalhador são princípios associados ao aumento da produtividade, objetivo principal da escola do comportamento organizacional.",
    "correta": "E",
    "tema": "Teoria Clássica/Científica",
    "justificativa": "Esses são princípios da **Abordagem Clássica** (Taylor/Fayol). A Escola do Comportamento Organizacional foca nas pessoas, motivação e dinâmica de grupo, criticando a 'desumanização' da especialização excessiva."
  },
  {
    "enunciado": "A produtividade de limpeza de pisos por servente baseada em metragem e tempo, conforme norma governamental, baseia-se em princípios da administração científica.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Definir padrões de produção (ex: X m² por hora) é a aplicação prática da **Padronização** de Taylor. Busca-se a 'One Best Way' de executar o serviço para garantir eficiência mensurável."
  },
  {
    "enunciado": "No âmbito da administração científica, a lógica de substituir os critérios de julgamento individuais dos operários por métodos baseados em parâmetros científicos corresponde ao princípio do planejamento.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Princípio do Planejamento: Substituir a improvisação e o critério individual do operário (empirismo) por métodos planejados e testados cientificamente pela gerência."
  },
  {
    "enunciado": "Em se tratando da administração científica, o princípio da execução prevê a alocação de cargos e tarefas com base em critérios de competências gerenciais e satisfação no trabalho.",
    "correta": "E",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "O Princípio da Execução foca em distribuir as atribuições para que a execução seja disciplinada. A 'satisfação no trabalho' não era foco de Taylor (que focava no 'Homo Economicus' e incentivos financeiros)."
  },
  {
    "enunciado": "A adoção de métodos específicos para a realização de cada tarefa e de incentivos financeiros atrelados à produtividade é característica típica da administração científica.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Este é o coração do Taylorismo: Método padronizado + Pagamento por peça (produtividade) = Eficiência Máxima."
  },
  {
    "enunciado": "A especialização do trabalhador na execução de tarefas repetitivas, visando rapidez e produtividade, é um conceito de 'especialização' proposto pela administração científica.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "A especialização do operário (fazer a mesma coisa sempre) aumenta a destreza e velocidade, reduzindo custos. Analogia: Um operário que só aperta parafusos o dia todo fará isso mais rápido que um que monta o carro todo."
  },
  {
    "enunciado": "A administração científica foi um movimento marcado pela ênfase no nível de execução, com foco em tarefas e atividades.",
    "correta": "C",
    "tema": "Teoria Científica (Taylor)",
    "justificativa": "Taylor foca no 'chão de fábrica' (nível operacional/execução). Fayol (Clássica) foca na estrutura (nível gerencial/administrativo)."
  },
  {
    "enunciado": "Para a administração clássica, a preocupação é o desempenho dos recursos, deixando as pessoas em segundo plano.",
    "correta": "C",
    "tema": "Teoria Clássica",
    "justificativa": "A Abordagem Clássica (incluindo Taylor e Fayol) é prescritiva e normativa. O foco é na estrutura, no método e no lucro. O ser humano é visto como uma peça da engrenagem (*Homo Economicus*)."
  },
  {
    "enunciado": "A abordagem clássica traz a importância da qualidade do trabalho realizado, de forma menos parametrizada e mais dependente do estilo de cada colaborador.",
    "correta": "E",
    "tema": "Teoria Clássica",
    "justificativa": "Oposto. A Clássica é **altamente parametrizada**, rígida e padronizada. O 'estilo do colaborador' é eliminado em favor do método padrão ('The One Best Way')."
  },
  {
    "enunciado": "A teoria clássica da administração, representada por Taylor, partia do estudo do todo organizacional e de sua estrutura para garantir eficiência a todas as partes envolvidas.",
    "correta": "E",
    "tema": "Teoria Clássica",
    "justificativa": "Erro duplo: 1) Taylor é Adm. Científica (ênfase nas tarefas/baixo para cima). 2) Quem foca na estrutura/todo organizacional é Fayol (Teoria Clássica). O item misturou os autores."
  },
  {
    "enunciado": "Eficiência operacional, organização formal e bem-estar dos funcionários são algumas das contribuições da teoria clássica da administração para a administração pública.",
    "correta": "E",
    "tema": "Teoria Clássica",
    "justificativa": "A Teoria Clássica contribuiu com eficiência e organização formal. O **bem-estar dos funcionários** não era uma preocupação (foco mecânico). Quem trouxe isso foi a Teoria das Relações Humanas."
  },
  {
    "enunciado": "De acordo com a teoria clássica da administração, a divisão do trabalho implica o dispêndio de elevados custos para a organização.",
    "correta": "E",
    "tema": "Teoria Clássica",
    "justificativa": "A divisão do trabalho visa justamente a **redução** de custos através da especialização e aumento da eficiência produtiva."
  },
  {
    "enunciado": "Na teoria clássica, o princípio segundo o qual funcionários são alocados em áreas funcionais com base na especialização denomina-se divisão do trabalho.",
    "correta": "C",
    "tema": "Teoria Clássica (Fayol)",
    "justificativa": "A divisão do trabalho consiste em fragmentar tarefas complexas em atividades simples e especializadas, agrupando-as em órgãos ou departamentos."
  },
  {
    "enunciado": "A instituição de estruturas organizacionais formais, rígidas, com esquemas lógicos e preestabelecidos, sem a consideração de conteúdos psicológicos e sociais, está em conformidade com a teoria clássica da administração.",
    "correta": "C",
    "tema": "Teoria Clássica",
    "justificativa": "Descrição perfeita da 'Teoria da Máquina'. A organização é vista como um sistema fechado, lógico e formal, ignorando a organização informal e a psicologia humana."
  },
  {
    "enunciado": "As abordagens da teoria clássica da administração abrangem conceitos normativos e prescritivos sobre a melhor forma de organizar, considerada válida para toda e qualquer organização.",
    "correta": "C",
    "tema": "Teoria Clássica",
    "justificativa": "Eles buscavam 'Leis Universais' da administração. Acreditavam que existia uma única forma certa de administrar, aplicável a qualquer empresa (receita de bolo)."
  },
  {
    "enunciado": "O pensamento central da escola clássica afirma que o administrador será bom à medida que seus passos forem planejados, organizados e coordenados de maneira racional.",
    "correta": "C",
    "tema": "Teoria Clássica (Fayol)",
    "justificativa": "Refere-se às funções administrativas de Fayol (POCC: Planejar, Organizar, Comandar, Coordenar, Controlar). A racionalidade administrativa é a chave do sucesso."
  },
  {
    "enunciado": "A transição da teoria clássica para a teoria das relações humanas levou à priorização da descentralização de autoridade nas organizações.",
    "correta": "C",
    "tema": "Evolução do Pensamento Administrativo",
    "justificativa": "A Clássica era centralizadora e rígida. Relações Humanas (Mayo) trouxe a democracia no trabalho, delegação e foco nos grupos informais, favorecendo a descentralização."
  },
  {
    "enunciado": "A abordagem clássica da administração tinha como principais ênfases a aplicação de métodos para aumentar a eficiência no trabalho e a elevada consideração pelas relações interpessoais.",
    "correta": "E",
    "tema": "Teoria Clássica",
    "justificativa": "Ela focava na eficiência, mas **ignorava** as relações interpessoais (consideradas irrelevantes para a produção mecânica)."
  },
  {
    "enunciado": "Ênfase na eficiência e no processo produtivo são características típicas da abordagem clássica da administração.",
    "correta": "C",
    "tema": "Teoria Clássica",
    "justificativa": "Foco na estrutura (Fayol) e tarefas (Taylor) para maximizar o output (eficiência) do processo produtivo."
  },
  {
    "enunciado": "Caracteriza um sistema de especialização vertical a situação em que a estrutura organizacional apresenta uma cadeia de comando hierarquizada (empregados -> diretores).",
    "correta": "C",
    "tema": "Estrutura Organizacional",
    "justificativa": "Especialização **Vertical** = Níveis hierárquicos (Autoridade/Chefia). Especialização **Horizontal** = Departamentalização (Áreas/Tarefas)."
  },
  {
    "enunciado": "Ênfase na estrutura organizacional é característica da teoria clássica.",
    "correta": "C",
    "tema": "Teoria Clássica (Fayol)",
    "justificativa": "Fayol focou na anatomia (estrutura) e fisiologia (funcionamento) da organização. Taylor focou nas tarefas."
  },
  {
    "enunciado": "A consideração das pessoas como parte mais importante da organização surge no tipo ideal de burocracia de Weber.",
    "correta": "E",
    "tema": "Teoria da Burocracia",
    "justificativa": "A Burocracia foca na impessoalidade e nos cargos, não nas pessoas. Quem foca nas pessoas é a Teoria das Relações Humanas."
  },
  {
    "enunciado": "Na abordagem burocrática, predominam as práticas relacionadas ao fluxo organizado de processos, documentos e procedimentos, de forma impessoal e racional.",
    "correta": "C",
    "tema": "Teoria da Burocracia",
    "justificativa": "Weber via a burocracia como a forma mais racional de dominação, baseada em regras escritas e meritocracia, eliminando o personalismo."
  },
{
    "enunciado": "Enquanto a teoria da burocracia privilegia a estrutura organizacional, a teoria estruturalista foca na estrutura, no ambiente e nas pessoas da organização.",
    "correta": "C",
    "tema": "Teoria Estruturalista",
    "justificativa": "A Estruturalista é uma síntese (Clássica + RH). Ela analisa a organização formal e informal e sua relação com o ambiente externo (sociedade de organizações)."
  },
  {
    "enunciado": "As organizações formais ou burocráticas apresentam três características principais: formalidade, impessoalidade e profissionalismo.",
    "correta": "C",
    "tema": "Teoria da Burocracia",
    "justificativa": "O tripé de Weber: Normas escritas (formalidade), tratamento igualitário/cargos (impessoalidade) e seleção por mérito/carreira (profissionalismo)."
  },
  {
    "enunciado": "O poder burocrático é um sistema de organização baseado em regras e procedimentos preestabelecidos, diferindo do poder autoritário que exige obediência absoluta pessoal.",
    "correta": "C",
    "tema": "Teoria da Burocracia",
    "justificativa": "Na burocracia, obedece-se à 'lei' (regra racional-legal) e ao cargo, não à pessoa do chefe (carisma ou tradição)."
  },
  {
    "enunciado": "A autoridade legal, típica da organização burocrática, depende da criação de normas legais e do acordo para sujeição aos ditames do sistema legal.",
    "correta": "C",
    "tema": "Teoria da Burocracia",
    "justificativa": "É a Dominação Racional-Legal. A legitimidade vem da crença na justiça da lei (estatuto/regimento)."
  },
  {
    "enunciado": "A adoção de práticas burocráticas nas organizações pode resultar em uma disfunção associada à despersonalização no relacionamento entre os colaboradores.",
    "correta": "C",
    "tema": "Disfunções da Burocracia",
    "justificativa": "O excesso de impessoalidade faz com que as pessoas sejam vistas apenas como números ou cargos, eliminando a empatia e o trato humano (disfunção)."
  },
  {
    "enunciado": "Comunicações formalizadas e admissão por competência profissional são dimensões da escola burocrática de Weber.",
    "correta": "C",
    "tema": "Teoria da Burocracia",
    "justificativa": "Tudo deve ser escrito (formalizado) e a escolha de funcionários deve ser técnica (meritocracia), não política."
  },
  {
    "enunciado": "No modelo burocrático, os cargos públicos não são profissionalizados e as esferas econômica e política se apresentam unificadas.",
    "correta": "E",
    "tema": "Teoria da Burocracia",
    "justificativa": "A burocracia **separa** o público do privado (contra o patrimonialismo) e exige a profissionalização do funcionário (especialista assalariado)."
  },
  {
    "enunciado": "Internalização de normas, categorização de decisões e superconformidade são características desejáveis na burocracia.",
    "correta": "E",
    "tema": "Disfunções da Burocracia",
    "justificativa": "São **disfunções** (efeitos colaterais negativos). A superconformidade ('seguir a regra pela regra') gera rigidez e ineficiência, não sendo desejável."
  },
  {
    "enunciado": "Ao se utilizar a abordagem sistêmica da administração, é pertinente adotar uma visão focada no todo e uma forma de pensamento sintético.",
    "correta": "C",
    "tema": "Teoria dos Sistemas",
    "justificativa": "Pensamento Sistêmico = Visão Holística (o todo é maior que a soma das partes). Sintético = Integrador (oposto de analítico/reducionista)."
  },
  {
    "enunciado": "Conceber a empresa enquanto ente mecânico, sem considerá-la como todo orgânico em interação com o ambiente externo, é enfoque precípuo da abordagem sistêmica.",
    "correta": "E",
    "tema": "Teoria dos Sistemas",
    "justificativa": "Isso descreve a Abordagem Clássica (Sistema Fechado). A Sistêmica vê a empresa como **Sistema Aberto** e Orgânico, em constante troca com o ambiente."
  },
  {
    "enunciado": "A organização sistêmica da administração pública federal baseia-se em sistemas estruturantes (atividades primárias) e estruturadores (apoio/suporte).",
    "correta": "C",
    "tema": "Administração Pública Federal",
    "justificativa": "Baseado na lógica do Decreto-Lei 200/67. Sistemas estruturantes cuidam das finalidades e estruturadores dão o suporte meio (pessoal, serviços gerais)."
  },
  {
    "enunciado": "Na organização sistêmica da administração pública federal, as decisões administrativas ocorrem de forma totalmente descentralizada, com autonomia completa dos órgãos.",
    "correta": "E",
    "tema": "Administração Pública",
    "justificativa": "Existe a supervisão ministerial e o controle. A descentralização (administração indireta) não confere autonomia absoluta; há vinculação e controle finalístico."
  },
  {
    "enunciado": "De acordo com a abordagem sistêmica, a administração de recursos humanos busca a integração do trabalhador à organização por meio da coordenação dos interesses de ambas as partes.",
    "correta": "C",
    "tema": "Gestão de Pessoas / Sistêmica",
    "justificativa": "Vê a organização como um sistema social onde os objetivos individuais e organizacionais devem ser alinhados para o equilíbrio do sistema."
  },
  {
    "enunciado": "A teoria que admite a organização como um composto de unidades inter-relacionadas com o ambiente externo é a teoria de sistemas.",
    "correta": "C",
    "tema": "Teoria dos Sistemas",
    "justificativa": "Definição clássica: Um conjunto de partes interdependentes que interagem entre si e com o ambiente externo para atingir objetivos."
  },
  {
    "enunciado": "Os adeptos da abordagem sistêmica na administração defendem a seleção de apenas alguns sistemas sociais a serem estudados, isolando-os da integração.",
    "correta": "E",
    "tema": "Teoria dos Sistemas",
    "justificativa": "A abordagem é **holística** e integradora. Ela critica o isolamento de variáveis e busca entender a complexidade das interações totais."
  },
  {
    "enunciado": "Sistemas abertos mantêm relações de troca com o ambiente, enquanto sistemas fechados não mantêm relações de troca com o ambiente.",
    "correta": "C",
    "tema": "Teoria dos Sistemas",
    "justificativa": "Sistema Fechado (Entropia aumenta, morre). Sistema Aberto (Negentropia, adapta-se, sobrevive)."
  },
  {
    "enunciado": "A abordagem que integra o enfoque técnico ao enfoque comportamental é a abordagem sistêmica.",
    "correta": "C",
    "tema": "Teoria dos Sistemas",
    "justificativa": "Ela une as 'peças' (técnica/estrutura) com as 'pessoas' (comportamental) e o ambiente, oferecendo uma visão completa."
  },
  {
    "enunciado": "A caracterização das organizações como elementos sujeitos a sinergia, entropia e interdependência é típica da teoria neoestruturalista.",
    "correta": "E",
    "tema": "Teoria dos Sistemas",
    "justificativa": "Esses são conceitos-chave da **Teoria Geral dos Sistemas** (TGS). Sinergia (2+2=5), Entropia (tendência à desordem)."
  },
  {
    "enunciado": "Uma organização que dependa de interação com o ambiente para se manter em funcionamento se caracteriza como um sistema fechado.",
    "correta": "E",
    "tema": "Teoria dos Sistemas",
    "justificativa": "Dependência do ambiente = **Sistema Aberto**."
  },
  {
    "enunciado": "À medida que os sistemas sofrem mudanças, o ajustamento sistemático ocorre de forma contínua, gerando fenômenos como a homeostasia (equilíbrio) e a entropia.",
    "correta": "C",
    "tema": "Teoria dos Sistemas",
    "justificativa": "O sistema busca o equilíbrio dinâmico (homeostasia) enquanto luta contra a desorganização natural (entropia) através da adaptação."
  },
  {
    "enunciado": "Sistemas abertos caracterizam-se por consistirem em um processo infinito de intercâmbio com o seu ambiente para a troca de informações.",
    "correta": "C",
    "tema": "Teoria dos Sistemas",
    "justificativa": "A sobrevivência depende desse fluxo contínuo de entradas (inputs) e saídas (outputs)."
  },
  {
    "enunciado": "A diminuição da imprevisibilidade é um dos benefícios obtidos com a implementação do programa de integridade corporativa.",
    "correta": "C",
    "tema": "Governança e Compliance",
    "justificativa": "Programas de integridade estabelecem regras claras e monitoramento, reduzindo riscos de surpresas (fraudes, multas), o que aumenta a previsibilidade."
  },
  {
    "enunciado": "A avaliação de riscos de integridade está relacionada exclusivamente à prestação de contas financeiras dos dirigentes.",
    "correta": "E",
    "tema": "Gestão de Riscos",
    "justificativa": "Riscos de integridade vão além do financeiro: incluem corrupção, nepotismo, conflito de interesses, reputação e conduta ética."
  },
  {
    "enunciado": "A comprovação de adequado ambiente de controle interno limita-se ao cumprimento das regras de integridade e demonstração de independência.",
    "correta": "E",
    "tema": "Controles Internos (COSO)",
    "justificativa": "O ambiente de controle é amplo: envolve competência técnica, filosofia da gestão, estrutura organizacional e compromisso com a competência, não apenas regras éticas."
  },
  {
    "enunciado": "A governança corporativa apresentou avanços no século XXI, focando também o atendimento aos stakeholders, além dos dados econômicos para sócios.",
    "correta": "C",
    "tema": "Evolução da Governança",
    "justificativa": "A governança evoluiu do foco exclusivo no acionista (*Shareholder*) para uma visão mais inclusiva e sustentável (*Stakeholder Capitalism*)."
  },
{
    "enunciado": "Um importante marco histórico na evolução da governança corporativa é o Relatório de Aspectos Financeiros elaborado pela OCDE.",
    "correta": "E",
    "tema": "Histórico da Governança",
    "justificativa": "O marco clássico é o **Relatório Cadbury** (Reino Unido, 1992). A OCDE lançou *Princípios* de Governança posteriormente, mas o item cita um relatório específico com título que sugere confusão ou imprecisão histórica no contexto da questão."
  },
  {
    "enunciado": "A expressão governança corporativa (corporate governance) foi difundida por administradores de companhias abertas e pela mídia.",
    "correta": "C",
    "tema": "Histórico da Governança",
    "justificativa": "O termo ganhou força nos anos 80/90 nos EUA e UK, impulsionado por escândalos e pela necessidade de proteger investidores minoritários em empresas de capital aberto."
  },
  {
    "enunciado": "A lei inglesa Sarbanes-Oxley foi estruturada a partir de fraudes contábeis e escândalos do mercado inglês.",
    "correta": "E",
    "tema": "Compliance / SOX",
    "justificativa": "A Lei Sarbanes-Oxley (SOX) é dos **Estados Unidos** (2002), criada em resposta aos escândalos da Enron e WorldCom. Não é inglesa."
  },
  {
    "enunciado": "Accountability é um princípio que preconiza que os agentes de governança zelem pela viabilidade econômico-financeira das organizações para reduzir externalidades negativas.",
    "correta": "E",
    "tema": "Princípios de Governança",
    "justificativa": "Accountability é **Prestação de Contas**. Zelar pela viabilidade e valor da empresa refere-se ao princípio da **Responsabilidade Corporativa** (Sustainability/Responsibility)."
  },
  {
    "enunciado": "A governança corporativa estrutura-se em um sistema que busca o equilíbrio entre os diversos interesses dos atores, visando favorecer a sociedade e o meio ambiente.",
    "correta": "C",
    "tema": "Conceito de Governança",
    "justificativa": "Governança é o sistema de direção e controle. Modernamente, busca alinhar interesses (sócios, gestores, stakeholders) com foco em sustentabilidade (ESG)."
  },
  {
    "enunciado": "Com as boas práticas de governança, os princípios básicos são transformados em recomendações subjetivas para preservar o valor econômico.",
    "correta": "E",
    "tema": "Práticas de Governança",
    "justificativa": "As práticas buscam ser **objetivas** e concretas (regras, comitês, transparência), não subjetivas. E visam otimizar/criar valor, não apenas preservar."
  },
  {
    "enunciado": "A governança corporativa tem como finalidade a garantia da manutenção do valor da sociedade, observando o princípio da continuidade.",
    "correta": "E",
    "tema": "Objetivos da Governança",
    "justificativa": "A governança visa **maximizar** ou otimizar o valor (crescimento), não apenas mantê-lo estático. A 'manutenção' pode implicar estagnação."
  },
  {
    "enunciado": "Para a teoria dos stakeholders, não se deve permitir o controle da empresa a grupo que não seja acionista, pois geraria ineficiência.",
    "correta": "C",
    "tema": "Teorias de Governança",
    "justificativa": "O item apresenta uma crítica à Teoria dos Stakeholders sob a ótica da **Teoria da Agência** (que defende a primazia do acionista). Permitir controle difuso pode diluir a responsabilidade."
  },
  {
    "enunciado": "A teoria da agência demonstra que, quando os atores agem em harmonia e sem conflito, a tendência é a maximização da riqueza para o proprietário.",
    "correta": "C",
    "tema": "Teoria da Agência",
    "justificativa": "Se não houvesse conflito de agência (interesses alinhados), o agente trabalharia perfeitamente para o principal, maximizando o valor."
  },
  {
    "enunciado": "A teoria da agência tem como foco as relações entre o principal do empreendimento e um terceiro, também conhecido como agente.",
    "correta": "C",
    "tema": "Teoria da Agência",
    "justificativa": "Definição central: Relação Principal (Dono) x Agente (Gestor contratado)."
  },
  {
    "enunciado": "A criação e o cumprimento do código de conduta visam orientar funcionários e gerar confiança interna, sem refletirem no nível de confiança externo.",
    "correta": "E",
    "tema": "Código de Conduta",
    "justificativa": "O código reflete diretamente na **reputação externa**. Investidores e clientes confiam mais em empresas éticas."
  },
  {
    "enunciado": "Nas práticas corporativas, os valores e princípios éticos têm como objetivo a proteção dos sócios contra fraudes e abusos dos administradores.",
    "correta": "C",
    "tema": "Ética e Governança",
    "justificativa": "A ética mitiga o Risco Moral (*Moral Hazard*), protegendo o patrimônio dos sócios contra desvios dos gestores."
  },
  {
    "enunciado": "Os responsáveis pela governança devem zelar para que relacionamentos internos sejam transparentes e relacionamentos externos pautados pela simetria de informações.",
    "correta": "C",
    "tema": "Transparência",
    "justificativa": "Combater a assimetria de informação é função central da governança para garantir equidade e confiança no mercado."
  },
  {
    "enunciado": "A abordagem comportamental na governança se expandiu devido à complexidade das partes interessadas e à necessidade de conformidade social/ambiental.",
    "correta": "C",
    "tema": "Evolução da Governança",
    "justificativa": "Fatores humanos, cultura e stakeholders ganharam peso, pois regras frias não bastavam para evitar crises."
  },
  {
    "enunciado": "O conselho de administração é um órgão colegiado obrigatório em uma sociedade limitada.",
    "correta": "E",
    "tema": "Estrutura de Governança",
    "justificativa": "É obrigatório nas **Sociedades Anônimas (S.A.)** de capital aberto. Nas Limitadas (Ltda), é opcional."
  },
  {
    "enunciado": "Os princípios basilares da governança corporativa são transparência, equidade, prestação de contas e responsabilidade corporativa.",
    "correta": "C",
    "tema": "Pilares da Governança (IBGC)",
    "justificativa": "São os 4 pilares clássicos do IBGC: Transparency, Fairness, Accountability, Corporate Responsibility."
  },
  {
    "enunciado": "A composição do conselho de administração independe do porte e da complexidade da organização, devendo ser baseada apenas em legislação.",
    "correta": "E",
    "tema": "Boas Práticas",
    "justificativa": "A estrutura deve ser adequada ao tamanho ('tailor-made'). Uma startup não precisa do mesmo conselho de uma multinacional."
  },
  {
    "enunciado": "Os comitês de assessoramento do conselho de administração e da diretoria executiva são de natureza estatutária obrigatória.",
    "correta": "E",
    "tema": "Comitês",
    "justificativa": "Geralmente não são obrigatórios por lei (salvo exceções como Auditoria em bancos/estatais), sendo órgãos de apoio criados conforme a necessidade."
  },
  {
    "enunciado": "Os integrantes do conselho de administração devem apresentar, em sua maioria, alto nível de dependência em relação às partes interessadas.",
    "correta": "E",
    "tema": "Conselho de Administração",
    "justificativa": "Recomenda-se a presença de conselheiros **independentes** para garantir isenção e evitar conflitos de interesse."
  },
  {
    "enunciado": "O conselho de administração tem por foco, em geral, a criação de valor para a organização no longo prazo.",
    "correta": "C",
    "tema": "Papel do Conselho",
    "justificativa": "O Conselho define a estratégia visando a perenidade e sustentabilidade do negócio (longo prazo), não apenas lucro imediato."
  },
  {
    "enunciado": "A arquitetura de governança corporativa é a mesma para todas as organizações.",
    "correta": "E",
    "tema": "Estrutura de Governança",
    "justificativa": "Não existe modelo único ('one size fits all'). A governança deve se adaptar à cultura, porte e estrutura de capital de cada empresa."
  },
  {
    "enunciado": "São objetivos dos órgãos de controle: ajudar no uso eficiente dos recursos, na proteção da propriedade e no cumprimento de regras.",
    "correta": "C",
    "tema": "Controles Internos",
    "justificativa": "Objetivos do COSO: Eficácia/Eficiência operacional, Confiabilidade dos relatórios e Conformidade (Compliance)."
  },
  {
    "enunciado": "Os órgãos de controle têm como função primordial ajudar na implantação da burocracia funcional moderna na gestão.",
    "correta": "E",
    "tema": "Controle",
    "justificativa": "O objetivo é mitigar riscos e garantir objetivos, não 'implantar burocracia'. Burocracia excessiva é antagônica à agilidade moderna."
  },
  {
    "enunciado": "O compliance abrange todos os aspectos legais e regulatórios exigidos pelo segmento de atuação da organização.",
    "correta": "C",
    "tema": "Compliance",
    "justificativa": "Compliance é conformidade total: leis, regulamentos setoriais, normas internas e código de ética."
  },
  {
    "enunciado": "Identificação e classificação dos riscos representam algumas etapas para implementar um gerenciamento de riscos corporativos.",
    "correta": "C",
    "tema": "Gestão de Riscos",
    "justificativa": "O processo padrão envolve: Identificação -> Análise/Classificação -> Avaliação -> Tratamento."
  },
{
    "enunciado": "Compliance significa, em uma abordagem básica, estar alinhado com normas, controles externos e internos e, ainda, com políticas e diretrizes estabelecidas para o negócio.",
    "correta": "C",
    "tema": "Compliance",
    "justificativa": "Compliance (To Comply) é agir em conformidade. Envolve aderir a leis externas (regulatórias) e normas internas (estatutos/políticas) para garantir a integridade do negócio [1]."
  },
  {
    "enunciado": "Nas diversas definições sobre o termo risco, encontra-se um ou mais elementos de incerteza sobre o futuro.",
    "correta": "C",
    "tema": "Gestão de Riscos",
    "justificativa": "Risco é, por definição, o efeito da incerteza nos objetivos. Envolve a possibilidade de algo acontecer (probabilidade) e impactar o resultado (positivo ou negativo) [2]."
  },
  {
    "enunciado": "O relacionamento com clientes internos da organização abrange a execução de uma comunicação interna eficiente e não deve restringir-se ao desempenho econômico-financeiro da empresa.",
    "correta": "C",
    "tema": "Comunicação e Stakeholders",
    "justificativa": "A comunicação na governança deve ser holística, abrangendo valores, estratégia e cultura, não apenas números financeiros, para engajar os clientes internos (colaboradores) [2, 3]."
  },
  {
    "enunciado": "Na fase de monitoramento dos fatores de risco, é possível identificar novos riscos, analisar a eficiência dos processos instaurados, avaliar as necessidades e melhorar a alocação de capital.",
    "correta": "C",
    "tema": "Monitoramento de Riscos",
    "justificativa": "O monitoramento é contínuo e dinâmico. Ele serve para checar se os controles funcionam e para detectar novos riscos que surgem com as mudanças no ambiente [3, 4]."
  },
  {
    "enunciado": "Os riscos associados às fragilidades em equipamentos que podem comprometer a execução dos processos de trabalho são caracterizados como riscos de integridade.",
    "correta": "E",
    "tema": "Tipos de Risco",
    "justificativa": "Falhas em equipamentos e processos são **Riscos Operacionais**. Riscos de Integridade envolvem fraudes, corrupção e conduta ética [4]."
  },
  {
    "enunciado": "Na teoria da agência, o principal procura desenvolver formas de monitoramento e controle sobre as ações do agente; na teoria da captura, apontam-se situações em que haja grande chance de a agência ser assenhoreada ou beneficiar interesses privados.",
    "correta": "C",
    "tema": "Teorias de Governança e Regulação",
    "justificativa": "Correto. Teoria da Agência foca no controle Principal-Agente. Teoria da Captura (Regulação) alerta para quando a agência reguladora passa a defender os interesses das empresas reguladas em vez do público [5]."
  },
  {
    "enunciado": "A teoria da dependência de recursos parte do pressuposto de que as organizações não são capazes de produzir todos os recursos necessários à sua sobrevivência, devendo criar estratégias para obter vantagem competitiva.",
    "correta": "C",
    "tema": "Teoria da Dependência de Recursos",
    "justificativa": "Nenhuma empresa é uma ilha. Elas dependem do ambiente para obter recursos (capital, matéria-prima), o que exige gestão dessas dependências externas [5, 6]."
  },
  {
    "enunciado": "Considerado um código pioneiro em boas práticas de governança corporativa, o Relatório Cadbury foi publicado na década de 1990 nos Estados Unidos da América.",
    "correta": "E",
    "tema": "Histórico da Governança",
    "justificativa": "O Relatório Cadbury (1992) é do **Reino Unido** (Inglaterra), não dos EUA. Foi um marco fundamental para a governança mundial [6]."
  },
  {
    "enunciado": "Accountability e equidade são termos que se referem, respectivamente, ao zelo pelo sistema e pelo ambiente da empresa e à disponibilização de informações sobre a organização.",
    "correta": "E",
    "tema": "Princípios de Governança",
    "justificativa": "Conceitos trocados. **Accountability** é prestação de contas. **Equidade** é tratamento justo. Disponibilização de informações refere-se à **Transparência** [7, 8]."
  },
  {
    "enunciado": "A teoria dos stakeholders defende que o papel das organizações é gerenciar o relacionamento e os interesses legítimos dos participantes de suas operações, em detrimento da ideia de que a gestão deve servir ao interesse público.",
    "correta": "E",
    "tema": "Teoria dos Stakeholders",
    "justificativa": "A teoria dos stakeholders **inclui** o interesse público (comunidade, sociedade) como parte interessada, não o exclui. Ela busca harmonizar múltiplos interesses [8, 9]."
  },
  {
    "enunciado": "De acordo com os pressupostos da teoria da agência, o estabelecimento de sistemas de monitoramento e incentivos eficientes visa garantir que o comportamento dos executivos esteja alinhado aos interesses dos acionistas.",
    "correta": "C",
    "tema": "Teoria da Agência",
    "justificativa": "O objetivo central da governança na ótica da Agência é alinhar o Agente (Executivo) ao Principal (Acionista) para evitar conflitos e perdas [10]."
  },
  {
    "enunciado": "As medidas de compliance, que visam assegurar a conformidade das operações de uma organização com as leis, regras e normas, são indissociáveis da evolução e do uso crescente de inovação e tecnologia.",
    "correta": "C",
    "tema": "Compliance e Tecnologia",
    "justificativa": "Modernamente, compliance exige ferramentas tecnológicas (monitoramento de dados, IA) para lidar com a complexidade regulatória e volume de transações [10, 11]."
  },
  {
    "enunciado": "Os posicionamentos autoritários ou omissos são exemplos de patologias em governança, decorrentes, por exemplo, de atos comportamentais de integrantes de conselhos deliberativos que atuam de maneira intrusiva nas organizações.",
    "correta": "C",
    "tema": "Patologias de Governança",
    "justificativa": "Ocorre quando o Conselho quer 'microgerenciar' a diretoria (intrusivo) ou quando se omite de fiscalizar. O equilíbrio comportamental é chave [11, 12]."
  },
  {
    "enunciado": "A gestão de risco não deve se limitar a reduzir as ocorrências de eventos que possam impactar os objetivos e negócios da organização, devendo, também, maximizar oportunidades.",
    "correta": "C",
    "tema": "Gestão de Riscos",
    "justificativa": "Risco tem viés negativo (ameaça) e positivo (oportunidade). A gestão moderna busca mitigar ameaças e alavancar oportunidades para criar valor [12, 13]."
  },
  {
    "enunciado": "Cabe ao conselho fiscal, que é vinculado ao conselho de administração, apoiar os sócios e os diretores da organização nas funções de fiscalização e controle.",
    "correta": "E",
    "tema": "Conselho Fiscal",
    "justificativa": "O Conselho Fiscal é **independente** do Conselho de Administração e da Diretoria. Ele se reporta diretamente à Assembleia Geral (acionistas) para fiscalizar os gestores [13, 14]."
  },
  {
    "enunciado": "Chamam-se custos de agência os custos em que os acionistas incorrem para alinhar os interesses dos gestores aos seus.",
    "correta": "C",
    "tema": "Teoria da Agência",
    "justificativa": "Custos de agência incluem gastos com monitoramento (auditoria), incentivos (bônus) e perdas residuais decorrentes do conflito de interesses [14]."
  },
  {
    "enunciado": "Na teoria dos contratos, a empresa é considerada uma unidade técnica de produção, propriedade de indivíduos ou famílias.",
    "correta": "E",
    "tema": "Teorias Econômicas",
    "justificativa": "Essa é a visão da **Teoria Neoclássica**. A Teoria dos Contratos vê a firma como um 'nexo de contratos' (conjunto de acordos) entre diversas partes [15]."
  },
  {
    "enunciado": "A segregação de funções entre o conselho e a gestão-diretoria é um fator importante a se considerar no sistema de comunicação organizacional.",
    "correta": "C",
    "tema": "Segregação de Funções",
    "justificativa": "Separar quem monitora (Conselho) de quem executa (Diretoria) é vital para evitar concentração de poder e garantir transparência [16]."
  },
  {
    "enunciado": "Um sistema de governança é considerado eficiente quando, de forma exclusiva, os mecanismos externos asseguram as decisões baseadas na visão de geração de valor aos acionistas.",
    "correta": "E",
    "tema": "Sistemas de Governança",
    "justificativa": "A eficiência depende da combinação de mecanismos **internos** (Conselho, auditoria) e **externos** (leis, mercado), não apenas de um tipo [17]."
  },
  {
    "enunciado": "A secretaria do conselho de administração é um agente facilitador do processo de governança.",
    "correta": "C",
    "tema": "Estrutura de Governança",
    "justificativa": "A Secretaria de Governança (ou do Conselho) organiza o fluxo de informações, atas e reuniões, sendo crucial para o funcionamento do sistema [18]."
  },
  {
    "enunciado": "O comitê de auditoria é um dos comitês de assessoramento ao conselho de administração.",
    "correta": "C",
    "tema": "Comitês de Assessoramento",
    "justificativa": "O Comitê de Auditoria apoia o Conselho na supervisão das demonstrações financeiras e controles internos, sendo um braço técnico especializado [19]."
  },
  {
    "enunciado": "Os conselhos de administração são órgãos, estatutários ou não, que auxiliam a governança corporativa.",
    "correta": "E",
    "tema": "Conselho de Administração",
    "justificativa": "O Conselho de Administração é um órgão **estatutário** (previsto no estatuto) e deliberativo, não apenas auxiliar. Ele é o núcleo da governança [19, 20]."
  },
  {
    "enunciado": "A diretoria é o órgão responsável pela gestão e condução da organização.",
    "correta": "C",
    "tema": "Diretoria Executiva",
    "justificativa": "A Diretoria Executiva (CEO e diretores) é responsável pela administração do dia a dia e execução da estratégia definida pelo Conselho [20]."
  },
  {
    "enunciado": "A ouvidoria deve promover tratamento justo a todas as partes interessadas, levando em consideração os respectivos direitos, deveres, necessidades, interesses e expectativas.",
    "correta": "C",
    "tema": "Ouvidoria",
    "justificativa": "A ouvidoria atua como canal de escuta imparcial para resolver conflitos e receber manifestações de stakeholders internos e externos [21]."
  },
  {
    "enunciado": "A auditoria interna é o órgão executor da atividade-fim do negócio.",
    "correta": "E",
    "tema": "Auditoria Interna",
    "justificativa": "A auditoria interna é uma atividade de **avaliação e consultoria**, parte da 3ª linha de defesa. Ela não executa a atividade-fim (operação) da empresa [22]."
  },
{
    "enunciado": "A gestão de riscos tem o propósito de identificar e entender os riscos e manter as instâncias responsáveis informadas, para que as respostas aos riscos sejam apropriadas.",
    "correta": "C",
    "tema": "Gestão de Riscos",
    "justificativa": "O objetivo é dar visibilidade às incertezas para que a tomada de decisão seja informada e a resposta (mitigação/aceitação) seja adequada [22, 23]."
  },
  {
    "enunciado": "A governança define diretrizes e aprova a estrutura de gestão de riscos da organização, delegando a sua implantação para a gestão e assumindo o papel de supervisão.",
    "correta": "C",
    "tema": "Papéis em Riscos",
    "justificativa": "Divisão clássica: Governança (Conselho) define o apetite a risco e supervisiona. Gestão (Diretoria) implementa e opera os controles [23]."
  },
  {
    "enunciado": "Um sistema de governança corporativa bem estruturado implica a eliminação de riscos estratégicos e operacionais.",
    "correta": "E",
    "tema": "Gestão de Riscos",
    "justificativa": "Riscos nunca são totalmente eliminados. Eles são gerenciados, mitigados ou aceitos. Eliminar todo risco paralisaria a operação [24]."
  },
  {
    "enunciado": "A ausência de análise de riscos em um projeto pode comprometer o alinhamento estratégico e levar a desvios nos resultados esperados pela organização.",
    "correta": "C",
    "tema": "Gestão de Projetos e Riscos",
    "justificativa": "Ignorar riscos leva a surpresas desagradáveis que desviam o projeto de seus objetivos originais e estratégicos [25]."
  },
  {
    "enunciado": "Em projetos de governança, é admitido omitir dos stakeholders informações relevantes se isso evitar conflitos e garantir a continuidade do projeto.",
    "correta": "E",
    "tema": "Transparência",
    "justificativa": "A transparência é um pilar da governança. Ocultar informações relevantes fere a ética e a confiança, criando passivos de credibilidade [26]."
  },
  {
    "enunciado": "Enquanto a governança corporativa visa à supervisão estratégica da organização, o compliance se concentra na conformidade com leis e regulamentos, sem necessidade de integração entre ambos.",
    "correta": "E",
    "tema": "Governança e Compliance",
    "justificativa": "Eles devem estar **totalmente integrados** (GRC - Governança, Riscos e Compliance). Compliance isolado não tem força estratégica; governança sem compliance é temerária [27]."
  },
  {
    "enunciado": "No processo de gestão de riscos, a etapa de contextualização envolve o entendimento dos ambientes externo e interno, e a definição dos critérios de risco.",
    "correta": "C",
    "tema": "Processo de Gestão de Riscos",
    "justificativa": "Estabelecer o contexto (ISO 31000) é o primeiro passo: entender onde a empresa está pisando para definir como avaliar os riscos [28]."
  },
  {
    "enunciado": "Para evitar conflitos de interesse, boas práticas de gestão de riscos devem ser implantadas de forma isolada, sem integração com o planejamento estratégico da organização.",
    "correta": "E",
    "tema": "Gestão de Riscos Integrada",
    "justificativa": "A gestão de riscos deve ser integrada à estratégia (COSO ERM). Riscos devem ser considerados na definição dos objetivos, não isoladamente [29]."
  },
  {
    "enunciado": "A eficácia das políticas de governança de determinada organização depende exclusivamente de sua eficiência operacional, independentemente da transparência e do controle social.",
    "correta": "E",
    "tema": "Eficácia da Governança",
    "justificativa": "A eficácia depende também da legitimidade (transparência, ética) e do relacionamento com stakeholders, não apenas da eficiência interna [30]."
  },
  {
    "enunciado": "A gestão de riscos caracterizada como parte integrante de todas as atividades organizacionais denomina-se personalizada.",
    "correta": "E",
    "tema": "Gestão de Riscos Integrada",
    "justificativa": "Refere-se à gestão **Integrada** ou Corporativa (ERM), que permeia toda a organização, e não 'personalizada' (termo vago neste contexto) [31]."
  },
  {
    "enunciado": "O neocorporativismo apresenta uma relação mais colaborativa e institucionalizada entre o Estado e os grupos de interesse.",
    "correta": "C",
    "tema": "Relações Estado-Sociedade",
    "justificativa": "Diferente do pluralismo (livre competição de grupos) e do corporativismo estatal (controle total), o neocorporativismo busca pactos sociais institucionalizados [31, 32]."
  },
  {
    "enunciado": "Segundo o The Orange Book 2023, os processos de gestão de risco devem ser embasados em evidências e conduzidos de forma iterativa e colaborativa.",
    "correta": "C",
    "tema": "The Orange Book",
    "justificativa": "Princípios modernos de gestão de risco exigem dados reais (evidências) e colaboração entre as áreas, num ciclo contínuo de melhoria [33, 34]."
  },
  {
    "enunciado": "Conforme o COSO ERM 2017, todas as análises de integração dos riscos identificados com a estratégia organizacional estão condensadas na possibilidade de a estratégia não estar alinhada com a missão, a visão e os valores.",
    "correta": "E",
    "tema": "COSO ERM 2017",
    "justificativa": "O COSO ERM considera também os riscos da **execução** da estratégia e as **implicações** da estratégia escolhida, não apenas o desalinhamento com a missão [34, 35]."
  },
  {
    "enunciado": "Para o The Orange Book 2023, a recomendação de que cada organização pública deve estabelecer mecanismos de governança adequados ao seu negócio está associada ao princípio de que a gestão de riscos deve ser parte integrante de todas as atividades.",
    "correta": "E",
    "tema": "The Orange Book",
    "justificativa": "A recomendação de adequação ('tailor-made') refere-se ao princípio da **proporcionalidade** ou contexto, diferenciando-se da integração nas atividades [35, 36]."
  },
  {
    "enunciado": "O IBGC define governança corporativa como o sistema pelo qual as empresas são dirigidas, monitoradas e incentivadas, abarcando relacionamentos entre sócios, conselho, diretoria e órgãos de controle.",
    "correta": "C",
    "tema": "Definição IBGC",
    "justificativa": "Esta é a definição clássica e completa do Instituto Brasileiro de Governança Corporativa (IBGC) [37]."
  },
  {
    "enunciado": "A avaliação do desempenho institucional está circunscrita a auxiliar os gestores a entenderem a relação entre suas ações e decisões e os resultados obtidos.",
    "correta": "E",
    "tema": "Avaliação de Desempenho",
    "justificativa": "A avaliação vai além: serve também para prestar contas à sociedade (accountability), melhorar processos e subsidiar alocação de recursos, não se limitando ao entendimento dos gestores [38]."
  },
  {
    "enunciado": "São desafios na implantação de compliance: a resistência à adoção de novas práticas, falta de recursos, ausência de capacitação e de monitoramento contínuo.",
    "correta": "C",
    "tema": "Desafios de Compliance",
    "justificativa": "Mudança cultural (resistência) e falta de estrutura são os principais obstáculos práticos para efetivar programas de integridade [39]."
  },
  {
    "enunciado": "As implicações da estratégia escolhida, os riscos na sua execução e a possibilidade de desalinhamento com a missão são perspectivas integrantes do COSO ERM.",
    "correta": "C",
    "tema": "COSO ERM",
    "justificativa": "O framework conecta riscos e estratégia em três dimensões: Risco da Estratégia, Risco na Estratégia e Risco de não atingir a Estratégia [40]."
  },
  {
    "enunciado": "O modelo de gerenciamento de riscos do The Orange Book preconiza que a organização siga normas estritas para evitar que particularidades se sobreponham aos modelos de gestão pré-estabelecidos.",
    "correta": "E",
    "tema": "The Orange Book",
    "justificativa": "O guia enfatiza que a gestão de riscos deve ser **adaptada** ao contexto da organização, e não seguir um modelo rígido que ignora particularidades [41]."
  },
  {
    "enunciado": "Práticas de compliance permitem que a organização siga regulamentações, enquanto a tecnologia da informação aperfeiçoa a gestão de dados e a transparência.",
    "correta": "C",
    "tema": "Compliance e TI",
    "justificativa": "A sinergia entre Compliance (regras) e TI (ferramentas) é essencial para a governança moderna e transparência de dados [42, 43]."
  },
  {
    "enunciado": "Muitas organizações compreendem de forma excessivamente utilitarista o tripé da sustentabilidade, tratando-o como mera ferramenta de custo-benefício.",
    "correta": "C",
    "tema": "Sustentabilidade (ESG)",
    "justificativa": "Crítica comum: empresas usam ESG apenas para melhorar imagem ou lucro (greenwashing/utilitarismo), sem compromisso real com o impacto social/ambiental [43, 44]."
  },
  {
    "enunciado": "As dificuldades de gestão de fornecedores quanto aos aspectos ESG incluem a falta de visibilidade dos parceiros e a ausência de garantias sobre seus padrões éticos.",
    "correta": "C",
    "tema": "Cadeia de Suprimentos ESG",
    "justificativa": "Monitorar a cadeia de valor (fornecedores) é um dos maiores desafios ESG, devido à complexidade e falta de dados confiáveis [44, 45]."
  },
  {
    "enunciado": "O último estágio de evolução das partes interessadas refere-se às práticas de desenvolvimento sustentável e ocorre quando os processos estão planejados e com foco na gestão de riscos.",
    "correta": "E",
    "tema": "Evolução da Sustentabilidade",
    "justificativa": "O estágio avançado de sustentabilidade envolve **inovação** e **geração de valor compartilhado** (estratégico), não apenas gestão de riscos e processos (fase de conformidade) [45, 46]."
  },
  {
    "enunciado": "A identificação de riscos ESG é fundamental para preservar a imagem e reputação, independentemente de trazer vantagens competitivas.",
    "correta": "C",
    "tema": "Riscos ESG",
    "justificativa": "Mesmo que não gere lucro imediato, gerir riscos ESG é vital para a sobrevivência (licença social para operar) e proteção da marca [46, 47]."
  },
  {
    "enunciado": "Um tema ESG pouco relevante para a organização e stakeholders deve ter implantação premente e ser monitorado periodicamente.",
    "correta": "E",
    "tema": "Matriz de Materialidade",
    "justificativa": "Pela Matriz de Materialidade, foca-se no que é **relevante** (material). Temas pouco relevantes não exigem prioridade máxima [47, 48]."
  },
{
    "enunciado": "A norma ABNT PR 2030:2023 estabelece princípios ESG aplicáveis tanto ao setor público quanto ao privado, levando em consideração desafios de cada setor.",
    "correta": "C",
    "tema": "Normas ESG",
    "justificativa": "A Prática Recomendada (PR) visa orientar organizações de todos os tipos na incorporação de critérios ambientais, sociais e de governança [48, 49]."
  },
  {
    "enunciado": "A norma ABNT PR 2030:2023 implica a obrigatoriedade da criação de um comitê exclusivo de governança em todas as organizações, independentemente do porte.",
    "correta": "E",
    "tema": "Boas Práticas",
    "justificativa": "Normas de boas práticas (como IBGC e ABNT PR) recomendam a adaptação ('comply or explain'). Exigir comitês complexos para pequenas empresas seria inviável [49, 50]."
  },
  {
    "enunciado": "Na inovação aberta, apenas um dos agentes de inovação arca com os custos, enquanto a outra parte oferece a criação e aplicação de conhecimento.",
    "correta": "E",
    "tema": "Inovação Aberta",
    "justificativa": "Inovação Aberta (*Open Innovation*) pressupõe colaboração mútua, compartilhamento de riscos, custos e benefícios entre empresas, universidades e parceiros [50, 51]."
  },
  {
    "enunciado": "São consideradas atividades de inovação as etapas científicas, tecnológicas, organizacionais, financeiras e comerciais que conduzem à implementação de inovações.",
    "correta": "C",
    "tema": "Conceito de Inovação",
    "justificativa": "Inovação não é só a ideia (invenção), mas todo o processo até a implementação e geração de valor (comercial/social) [51, 52]."
  },
  {
    "enunciado": "Nos processos de gerenciamento de riscos, os comitês de auditoria atuam assessorados pelos conselhos de administração na supervisão das políticas.",
    "correta": "E",
    "tema": "Hierarquia de Governança",
    "justificativa": "Inversão de papéis. O **Comitê de Auditoria assessora o Conselho**, e não o contrário. O Conselho é o órgão soberano que recebe o suporte do Comitê [52, 53]."
  },
  {
    "enunciado": "A responsabilidade pelo gerenciamento de riscos corporativos e por atividades de controle está entre as atribuições da diretoria da organização.",
    "correta": "C",
    "tema": "Responsabilidades em Riscos",
    "justificativa": "A Diretoria (Gestão) é a dona do risco ('Risk Owner'). Ela deve implementar e manter os controles no dia a dia [53, 54]."
  },
  {
    "enunciado": "A gestão de riscos institucionais considera a probabilidade de eventos, a magnitude das consequências e a eficácia dos controles existentes.",
    "correta": "C",
    "tema": "Análise de Riscos",
    "justificativa": "A avaliação do Risco Residual (após controles) depende de analisar probabilidade, impacto e a força das barreiras (controles) implementadas [54, 55]."
  },
  {
    "enunciado": "O processo de gestão de riscos dispensa a aplicação sistemática de atividades coordenadas e foca apenas na identificação e avaliação.",
    "correta": "E",
    "tema": "Processo de Riscos",
    "justificativa": "A gestão de riscos **é** a aplicação sistemática de políticas, procedimentos e práticas coordenadas. Não é um ato isolado ou desorganizado [55, 56]."
  },
  {
    "enunciado": "Uma das etapas fundamentais da gestão de riscos é a avaliação da probabilidade e do impacto dos riscos identificados.",
    "correta": "C",
    "tema": "Avaliação de Riscos",
    "justificativa": "Essa é a fase de **Análise de Riscos**, essencial para priorizar quais riscos tratar primeiro (Matriz de Risco) [56]."
  },
  {
    "enunciado": "Consoante a teoria da custódia, os gestores são motivados principalmente por interesses pessoais e, portanto, requerem supervisão constante.",
    "correta": "E",
    "tema": "Teoria da Custódia (Stewardship)",
    "justificativa": "Essa descrição é da **Teoria da Agência**. A Teoria da Custódia diz o oposto: o gestor é um servidor confiável (steward) motivado pelo coletivo [57]."
  },
  {
    "enunciado": "A teoria da agência aborda o conflito de interesses entre os acionistas e os gestores, sugerindo mecanismos de controle e incentivos.",
    "correta": "C",
    "tema": "Teoria da Agência",
    "justificativa": "Base da governança tradicional: alinhar interesses divergentes entre Principal e Agente via cenoura (incentivos) e bastão (controle) [57, 58]."
  },
  {
    "enunciado": "De acordo com a teoria da dependência de recursos, a sobrevivência organizacional depende da capacidade de gerenciamento das dependências externas e do acesso a recursos críticos.",
    "correta": "C",
    "tema": "Teoria da Dependência de Recursos",
    "justificativa": "As organizações precisam interagir com o ambiente para obter o que não possuem, moldando sua estrutura e estratégia para garantir esses fluxos [58, 59]."
  },
  {
    "enunciado": "Segundo a teoria dos stakeholders, a governança corporativa deve privilegiar os interesses dos acionistas e desconsiderar outras partes interessadas.",
    "correta": "E",
    "tema": "Teoria dos Stakeholders",
    "justificativa": "Isso descreve a **Teoria da Primazia dos Acionistas** (*Shareholder Primacy*). A Teoria dos Stakeholders defende considerar **todos** os interessados [59, 60]."
  },
  {
    "enunciado": "Como regra geral, os comitês de assessoramento do conselho de administração não possuem caráter deliberativo e não estão habilitados a tomar decisões em nome do conselho.",
    "correta": "C",
    "tema": "Comitês de Assessoramento",
    "justificativa": "Eles estudam, analisam e **recomendam**. Quem decide (delibera) é o Conselho de Administração (colegiado) [60, 61]."
  },
  {
    "enunciado": "A assembleia geral é o órgão máximo de deliberação nas sociedades anônimas, responsável por decisões como a eleição de administradores e aprovação de contas.",
    "correta": "C",
    "tema": "Assembleia Geral",
    "justificativa": "A Assembleia reúne os donos (acionistas), sendo a instância soberana acima do Conselho [61, 62]."
  },
  {
    "enunciado": "A comunicação de operações financeiras suspeitas às autoridades competentes deve ser realizada com o conhecimento do cliente envolvido.",
    "correta": "E",
    "tema": "Prevenção à Lavagem de Dinheiro (PLD)",
    "justificativa": "O reporte ao COAF deve ser **confidencial**. Avisar o cliente configuraria 'tipping off' (vazamento), prejudicando a investigação [62, 63]."
  },
  {
    "enunciado": "A maioria das companhias brasileiras de grande porte apresenta uma estrutura de propriedade difusa, com elevada dispersão da base acionária.",
    "correta": "E",
    "tema": "Estrutura de Propriedade no Brasil",
    "justificativa": "No Brasil, a estrutura é historicamente **concentrada** (donos definidos/familiares). A propriedade difusa é típica do modelo anglo-saxão (EUA/UK) [63, 64]."
  },
  {
    "enunciado": "Governança corporativa corresponde ao conjunto de princípios e regras que regem os relacionamentos entre acionistas, conselheiros, executivos e colaboradores.",
    "correta": "C",
    "tema": "Definição de Governança",
    "justificativa": "É o sistema de regras do jogo corporativo, definindo direitos e deveres dos agentes [64, 65]."
  },
  {
    "enunciado": "Cooperação entre os colaboradores e promoção do interesse coletivo da organização, bem como diversidade e inclusão, são princípios de boa governança.",
    "correta": "C",
    "tema": "Princípios ESG/Governança",
    "justificativa": "A governança evoluiu para incorporar valores humanos e sociais como pilares de sustentabilidade e legitimidade [65, 66]."
  },
  {
    "enunciado": "O conselho de administração, por ser o órgão responsável pela aprovação da implantação do sistema de governança, não é um componente da estrutura de governança.",
    "correta": "E",
    "tema": "Estrutura de Governança",
    "justificativa": "O Conselho não só aprova como **é o principal componente** da estrutura de governança [66, 67]."
  },
  {
    "enunciado": "Uma organização não poderia dispensar a constituição de um conselho fiscal, pois ele é parte integrante de um sistema de governança e possui atribuições definidas em lei.",
    "correta": "E",
    "tema": "Conselho Fiscal",
    "justificativa": "Nas S.A., o Conselho Fiscal pode não ser permanente (funcionar apenas se acionado). Em outras empresas, pode nem existir. Não é obrigatório estar sempre instalado [67, 68]."
  },
  {
    "enunciado": "A organização deve divulgar com clareza e precisão políticas e atividades sob sua responsabilidade e seus impactos. Esse princípio é denominado transparência.",
    "correta": "C",
    "tema": "Transparência (Transparency)",
    "justificativa": "Transparência é o desejo de disponibilizar informações para as partes interessadas, não apenas as obrigatórias por lei [68, 69]."
  },
  {
    "enunciado": "Na gestão de facilities, deve-se incorporar o desenvolvimento de todas as atividades não essenciais, possibilitando que os colaboradores foquem nas atividades fundamentais.",
    "correta": "C",
    "tema": "Gestão de Facilities",
    "justificativa": "Facilities cuida do apoio (limpeza, segurança, manutenção) para que o 'core business' (atividade-fim) rode sem interrupções [69-71]."
  },
  {
    "enunciado": "Para a implantação da governança ESG, deve-se prever a participação dos colaboradores na definição de políticas e práticas sistematizadas.",
    "correta": "C",
    "tema": "Governança ESG",
    "justificativa": "O engajamento dos colaboradores (cultura) é vital para que as práticas ESG sejam reais e não apenas um documento de diretoria [71-73]."
  },
  {
    "enunciado": "Uma das diretrizes da governança no setor público é a definição formal e a comunicação clara dos papéis e responsabilidades das instâncias internas.",
    "correta": "C",
    "tema": "Governança Pública",
    "justificativa": "Clareza de papéis evita sobreposições e garante accountability. Se todos são responsáveis, ninguém é responsável [73]."
  },
{
    "enunciado": "O gestor (CEO) de uma companhia é o responsável pela execução da estratégia, cabendo ao Conselho de Administração orientar e monitorar a gestão, e não o contrário.",
    "correta": "C",
    "tema": "Papéis na Governança",
    "justificativa": "A hierarquia é: Acionistas > Conselho (Monitora/Direciona) > Gestão (Executa). O gestor presta contas ao conselho [74, 75]."
  },
  {
    "enunciado": "Historicamente (anos 50/60), as corporações brasileiras caracterizavam-se pela fraca presença de acionistas familiares majoritários.",
    "correta": "E",
    "tema": "Histórico Brasileiro",
    "justificativa": "Pelo contrário, o Brasil é marcado pela **forte** presença de grupos familiares controladores e baixa dispersão acionária [75, 76]."
  },
  {
    "enunciado": "No sistema de pesos e contrapesos da sociedade anônima, incluem-se a verificação de conflitos de interesse, a fiscalização interna e a auditoria externa.",
    "correta": "C",
    "tema": "Checks and Balances",
    "justificativa": "Esses mecanismos visam garantir o equilíbrio de poder e a integridade das informações financeiras [76]."
  },
  {
    "enunciado": "As publicações das Diretrizes de Governança Corporativa pela General Motors e do Cadbury Report na Inglaterra figuram como marcos importantes da década de 90.",
    "correta": "C",
    "tema": "Marcos Históricos",
    "justificativa": "O Cadbury Report (1992) e as diretrizes da GM foram pioneiros na formalização das boas práticas de governança modernas [76, 77]."
  },
  {
    "enunciado": "Governança corporativa pode ser definida como o sistema e a estrutura de poder que regem os mecanismos pelos quais as companhias são dirigidas e controladas.",
    "correta": "C",
    "tema": "Definição de Governança",
    "justificativa": "Definição alinhada ao Cadbury Report: 'o sistema pelo qual as empresas são dirigidas e controladas' [77, 78]."
  },
  {
    "enunciado": "Os custos de coletar informações, negociar e estabelecer contratos são denominados custos de transação.",
    "correta": "C",
    "tema": "Teoria dos Custos de Transação",
    "justificativa": "São os custos de fricção econômica. A firma existe para reduzir esses custos em comparação a fazer tudo via mercado [78, 79]."
  },
  {
    "enunciado": "A Teoria da Agência foca no conflito entre o principal (acionista) e o agente (gestor), e não no conflito entre acionistas e o conselho de administração.",
    "correta": "C",
    "tema": "Teoria da Agência",
    "justificativa": "O problema central é a separação entre propriedade (acionista) e controle (gestor), gerando assimetria e risco moral [79, 80]."
  },
  {
    "enunciado": "A Teoria dos Stakeholders estabelece que as companhias devem considerar os interesses de todas as partes interessadas, e não focar exclusivamente no interesse único dos acionistas.",
    "correta": "C",
    "tema": "Teoria dos Stakeholders",
    "justificativa": "Contrapõe o modelo 'Shareholder First'. A empresa deve gerar valor para funcionários, clientes e comunidade também [80, 81]."
  },
  {
    "enunciado": "Conforme a Teoria da Custódia (Stewardship), os gestores são vistos como servidores confiáveis que se identificam com os objetivos da companhia.",
    "correta": "C",
    "tema": "Teoria da Custódia",
    "justificativa": "Visão otimista do gestor: ele quer fazer um bom trabalho e ser reconhecido, alinhando-se naturalmente à empresa (oposto da Agência) [81]."
  },
  {
    "enunciado": "No âmbito da Teoria da Firma, as empresas estão envolvidas na determinação de variáveis econômicas como investimento, preços, produção e emprego.",
    "correta": "C",
    "tema": "Teoria da Firma",
    "justificativa": "A firma é a unidade tomadora de decisão na microeconomia, influenciando o mercado através de sua produção e preços [81, 82]."
  },
  {
    "enunciado": "De acordo com a Teoria da Dependência de Recursos, o acesso a recursos deve ocorrer invariavelmente no ambiente interno da companhia.",
    "correta": "E",
    "tema": "Teoria da Dependência de Recursos",
    "justificativa": "O foco é justamente o ambiente **externo**. A empresa precisa buscar fora o que não tem dentro, criando laços com atores externos [82, 83]."
  },
  {
    "enunciado": "Ao Conselho Fiscal compete fiscalizar os atos de gestão dos administradores e informar suas conclusões à Assembleia Geral.",
    "correta": "C",
    "tema": "Conselho Fiscal",
    "justificativa": "O Conselho Fiscal é o 'olho do dono' independente, reportando-se diretamente aos acionistas na Assembleia [83, 84]."
  },
  {
    "enunciado": "O conselho de administração e a diretoria compartilham as atribuições de responsabilidade pela gestão e de representação da companhia.",
    "correta": "E",
    "tema": "Segregação de Funções",
    "justificativa": "Eles têm papéis distintos. Conselho direciona e monitora; Diretoria gere e representa. Misturar confunde a responsabilidade (accountability) [84, 85]."
  },
  {
    "enunciado": "Em contextos de crise, abordagens comportamentais de governança são importantes para reduzir tensões entre conselheiros e gestores.",
    "correta": "C",
    "tema": "Governança Comportamental",
    "justificativa": "Habilidades interpessoais (soft skills) e gestão de conflitos são vitais quando a pressão aumenta e regras formais não bastam [85, 86]."
  },
  {
    "enunciado": "Na governança, a responsabilização (accountability) exige não apenas clareza sobre as atribuições, mas também a obrigação de assegurar que elas sejam cumpridas.",
    "correta": "C",
    "tema": "Accountability",
    "justificativa": "Não basta dizer 'você é responsável'. É preciso ter mecanismos de cobrança e consequências (*enforcement*) [86, 87]."
  },
  {
    "enunciado": "São atribuições da Assembleia Geral deliberar sobre a orientação dos negócios e fiscalizar os atos de gestão da diretoria no dia a dia.",
    "correta": "E",
    "tema": "Papéis da Assembleia",
    "justificativa": "A Assembleia delibera sobre temas macro (contas, eleição). Quem fiscaliza a gestão dia a dia é o **Conselho de Administração** (e o Fiscal) [87, 88]."
  },
  {
    "enunciado": "Riscos não geridos adequadamente ameaçam o atingimento dos objetivos, o cumprimento de prazos e o controle de custos e qualidade.",
    "correta": "C",
    "tema": "Impacto dos Riscos",
    "justificativa": "Riscos materializados viram problemas que afetam o tripé de projetos (Escopo, Prazo, Custo) e a estratégia [88, 89]."
  },
  {
    "enunciado": "Entre os objetivos do controle interno estão a salvaguarda dos ativos (recursos) e a garantia da fidedignidade das informações.",
    "correta": "C",
    "tema": "Controles Internos",
    "justificativa": "Objetivos clássicos do COSO: Operacional (ativos), Reporte (informação) e Conformidade [89, 90]."
  },
  {
    "enunciado": "O controle interno é um processo levado a efeito pela diretoria, desenhado para fornecer informações pontuais apenas sobre ameaças.",
    "correta": "E",
    "tema": "Controles Internos",
    "justificativa": "O controle interno visa fornecer garantia razoável sobre o alcance de **objetivos** (não só ameaças) e envolve toda a organização, não só a diretoria [90]."
  },
  {
    "enunciado": "A avaliação de riscos compreende práticas para minimizar os impactos dos riscos inerentes à operação.",
    "correta": "E",
    "tema": "Conceitos de Risco",
    "justificativa": "Avaliação (*Assessment*) é medir e analisar. Práticas para minimizar são o **Tratamento** ou Resposta ao risco. Conceitos distintos [90, 91]."
  },
  {
    "enunciado": "Códigos de compliance devem ser aliados a treinamento, monitoramento e responsabilização para serem efetivos.",
    "correta": "C",
    "tema": "Programa de Integridade",
    "justificativa": "Papel aceita tudo. Para funcionar, o código precisa viver na cultura através de treino e consequências [91, 92]."
  },
  {
    "enunciado": "Compliance é um processo contínuo que envolve identificar exigências legais/éticas, analisar riscos de não conformidade e adotar medidas preventivas.",
    "correta": "C",
    "tema": "Gestão de Compliance",
    "justificativa": "Compliance não é projeto (começo-meio-fim), é processo (cíclico). O ambiente regulatório muda, a empresa também [92, 93]."
  },
  {
    "enunciado": "O princípio da precaução na gestão de riscos sugere que, na ausência de certeza científica sobre danos graves, deve-se adotar medidas protetivas.",
    "correta": "C",
    "tema": "Princípio da Precaução",
    "justificativa": "In dubio pro securitate. Se há risco de dano irreversível, a falta de prova absoluta não justifica a inação [93, 94]."
  },
  {
    "enunciado": "Para que o monitoramento de riscos seja eficaz, deve-se acompanhar indicadores e identificar novos riscos que possam surgir.",
    "correta": "C",
    "tema": "Monitoramento Dinâmico",
    "justificativa": "Olhar só o retrovisor (indicadores passados) é perigoso. O radar deve estar ligado para novos riscos emergentes [94, 95]."
  },
  {
    "enunciado": "A comunicação de risco é uma estratégia para promover a percepção dos colaboradores sobre os perigos e riscos inerentes às suas atividades.",
    "correta": "C",
    "tema": "Cultura de Risco",
    "justificativa": "As pessoas precisam saber os riscos que correm e gerenciam. Comunicação clara cria a cultura de risco adequada [95]."
  },

];