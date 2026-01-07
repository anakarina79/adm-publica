const questions = [
{
  enunciado: "A Administração Pública existe para atender ao interesse público, e não aos interesses pessoais dos agentes que a integram.",
  correta: "C",
  tema: "Finalidade da Administração Pública",
  justificativa: "A Administração é como um veículo oficial: não pertence ao motorista, mas à coletividade que ele serve."
},
{
  enunciado: "O interesse público pode ser afastado quando houver conveniência pessoal do agente público.",
  correta: "E",
  tema: "Finalidade da Administração Pública",
  justificativa: "A conveniência pessoal nunca pode se sobrepor ao interesse público, assim como regras de trânsito não mudam por preferência do motorista."
},
{
  enunciado: "A Administração Pública atua vinculada à lei, somente podendo agir conforme autorização legal.",
  correta: "C",
  tema: "Princípio da Legalidade",
  justificativa: "Para a Administração, a lei funciona como trilho de trem: só é possível andar por onde ela permite."
},
{
  enunciado: "Na Administração Pública, é permitido fazer tudo o que a lei não proíbe expressamente.",
  correta: "E",
  tema: "Princípio da Legalidade",
  justificativa: "Essa lógica vale para o particular. Para o poder público, só é permitido o que a lei autoriza."
},
{
  enunciado: "O princípio da impessoalidade impede que a atuação administrativa seja direcionada a favorecer ou prejudicar pessoas específicas.",
  correta: "C",
  tema: "Princípio da Impessoalidade",
  justificativa: "A Administração deve agir como um árbitro imparcial, sem torcer para nenhum dos lados."
},
{
  enunciado: "A impessoalidade permite a promoção pessoal de autoridades desde que haja interesse público envolvido.",
  correta: "E",
  tema: "Princípio da Impessoalidade",
  justificativa: "Mesmo com interesse público, a promoção pessoal é vedada. O foco deve ser o ato, não o agente."
},
{
  enunciado: "A moralidade administrativa exige comportamento ético e probo por parte dos agentes públicos.",
  correta: "C",
  tema: "Princípio da Moralidade",
  justificativa: "Não basta agir conforme a lei; é preciso agir corretamente, como seguir o espírito das regras e não só a letra."
},
{
  enunciado: "A observância da legalidade é suficiente para caracterizar a moralidade administrativa.",
  correta: "E",
  tema: "Princípio da Moralidade",
  justificativa: "Um ato pode ser legal e ainda assim imoral. Moralidade é um filtro adicional."
},
{
  enunciado: "A publicidade dos atos administrativos é regra geral na Administração Pública.",
  correta: "C",
  tema: "Princípio da Publicidade",
  justificativa: "A publicidade funciona como uma vitrine: permite que a sociedade veja e fiscalize o que foi feito."
},
{
  enunciado: "O princípio da publicidade impede qualquer forma de sigilo na Administração Pública.",
  correta: "E",
  tema: "Princípio da Publicidade",
  justificativa: "O sigilo é exceção justificada, como documentos sensíveis. Regra geral continua sendo a transparência."
},
{
  enunciado: "O princípio da eficiência busca melhores resultados com o menor gasto de recursos públicos.",
  correta: "C",
  tema: "Princípio da Eficiência",
  justificativa: "Eficiência é fazer bem feito, sem desperdício, como chegar ao destino usando o melhor caminho."
},
{
  enunciado: "A eficiência autoriza a Administração a desrespeitar a legalidade para alcançar melhores resultados.",
  correta: "E",
  tema: "Princípio da Eficiência",
  justificativa: "Resultados não justificam ilegalidades. A eficiência caminha junto com a legalidade, não acima dela."
},
{
  enunciado: "A Administração Pública pode atuar de forma direta ou indireta para alcançar suas finalidades.",
  correta: "C",
  tema: "Administração Direta e Indireta",
  justificativa: "É como uma empresa que atua tanto com equipes internas quanto com subsidiárias especializadas."
},
{
  enunciado: "A Administração Indireta integra a estrutura dos Poderes Legislativo e Judiciário.",
  correta: "E",
  tema: "Administração Direta e Indireta",
  justificativa: "A Administração Indireta está vinculada ao Poder Executivo, ainda que atue com autonomia."
},
{
  enunciado: "A descentralização administrativa ocorre quando o Estado transfere a execução de atividades a outras entidades.",
  correta: "C",
  tema: "Descentralização Administrativa",
  justificativa: "Descentralizar é delegar tarefas, como um gestor que distribui funções para ganhar eficiência."
},
{
  enunciado: "A descentralização implica hierarquia direta entre o ente central e a entidade descentralizada.",
  correta: "E",
  tema: "Descentralização Administrativa",
  justificativa: "Há vínculo, mas não hierarquia. É relação de supervisão, não de comando direto."
},
{
  enunciado: "A centralização administrativa ocorre quando o próprio ente estatal executa diretamente suas atividades.",
  correta: "C",
  tema: "Centralização Administrativa",
  justificativa: "Centralizar é fazer dentro de casa, sem repassar a terceiros."
},
{
  enunciado: "A centralização administrativa é incompatível com a eficiência administrativa.",
  correta: "E",
  tema: "Centralização Administrativa",
  justificativa: "Em alguns casos, centralizar é mais eficiente. Depende da atividade."
},
{
  enunciado: "A atuação administrativa está sujeita ao controle interno e externo.",
  correta: "C",
  tema: "Controle da Administração Pública",
  justificativa: "O controle funciona como dupla checagem: evita erros e abusos."
},
{
  enunciado: "O controle externo é exercido exclusivamente pelo Poder Judiciário.",
  correta: "E",
  tema: "Controle da Administração Pública",
  justificativa: "O controle externo também é exercido pelos Tribunais de Contas e pelo Legislativo."
},
{
  enunciado: "Os atos administrativos gozam de presunção de legitimidade.",
  correta: "C",
  tema: "Atos Administrativos",
  justificativa: "Presume-se que o ato nasceu válido, até prova em contrário, como um documento oficial."
},
{
  enunciado: "A presunção de legitimidade impede a anulação de atos administrativos ilegais.",
  correta: "E",
  tema: "Atos Administrativos",
  justificativa: "A presunção é relativa. Atos ilegais podem e devem ser anulados."
},
{
  enunciado: "A Administração Pública pode rever seus próprios atos quando ilegais.",
  correta: "C",
  tema: "Autotutela Administrativa",
  justificativa: "A autotutela é como corrigir um erro antes que alguém precise apontá-lo."
},
{
  enunciado: "A autotutela administrativa depende sempre de autorização judicial.",
  correta: "E",
  tema: "Autotutela Administrativa",
  justificativa: "A Administração pode corrigir seus próprios atos sem recorrer ao Judiciário."
},
 {
  enunciado: "O princípio da supremacia do interesse público orienta a atuação da Administração Pública em relação aos interesses privados.",
  correta: "C",
  tema: "Supremacia do Interesse Público",
  justificativa: "É como uma fila de emergência: o interesse coletivo passa à frente quando necessário."
},
{
  enunciado: "A supremacia do interesse público autoriza a Administração a agir de forma arbitrária.",
  correta: "E",
  tema: "Supremacia do Interesse Público",
  justificativa: "Supremacia não é carta branca. Mesmo priorizando o coletivo, a Administração deve respeitar a lei."
},
{
  enunciado: "O princípio da indisponibilidade do interesse público impede que o agente público disponha livremente dos bens e interesses administrados.",
  correta: "C",
  tema: "Indisponibilidade do Interesse Público",
  justificativa: "O gestor é apenas guardião do patrimônio público, como um síndico que não pode vender o prédio."
},
{
  enunciado: "A indisponibilidade do interesse público permite que o agente público renuncie a direitos em nome da Administração.",
  correta: "E",
  tema: "Indisponibilidade do Interesse Público",
  justificativa: "Renunciar direitos públicos sem autorização legal viola a indisponibilidade."
},
{
  enunciado: "O poder hierárquico permite à Administração distribuir competências e controlar a atuação de seus agentes.",
  correta: "C",
  tema: "Poder Hierárquico",
  justificativa: "Funciona como organograma: define quem manda, quem executa e quem responde."
},
{
  enunciado: "O poder hierárquico alcança entidades da Administração Indireta.",
  correta: "E",
  tema: "Poder Hierárquico",
  justificativa: "Na Administração Indireta não há hierarquia, mas sim controle finalístico."
},
{
  enunciado: "O poder disciplinar autoriza a Administração a apurar infrações funcionais e aplicar sanções aos servidores.",
  correta: "C",
  tema: "Poder Disciplinar",
  justificativa: "É o mecanismo de correção interna, como regras de conduta dentro de uma organização."
},
{
  enunciado: "O poder disciplinar se aplica apenas aos servidores estatutários.",
  correta: "E",
  tema: "Poder Disciplinar",
  justificativa: "Também alcança particulares que mantêm vínculo jurídico com a Administração."
},
{
  enunciado: "O poder regulamentar permite à Administração detalhar a aplicação da lei.",
  correta: "C",
  tema: "Poder Regulamentar",
  justificativa: "É como um manual de instruções que explica como cumprir a lei."
},
{
  enunciado: "O poder regulamentar autoriza a criação de obrigações não previstas em lei.",
  correta: "E",
  tema: "Poder Regulamentar",
  justificativa: "Regulamento explica a lei, não cria novas regras."
},
{
  enunciado: "O poder de polícia permite à Administração limitar direitos individuais em benefício do interesse público.",
  correta: "C",
  tema: "Poder de Polícia",
  justificativa: "É como limitar velocidade para evitar acidentes: restringe para proteger."
},
{
  enunciado: "O poder de polícia é exercido apenas por meio de atos repressivos.",
  correta: "E",
  tema: "Poder de Polícia",
  justificativa: "Pode ser preventivo, fiscalizador ou repressivo."
},
{
  enunciado: "Os atos administrativos possuem presunção de legitimidade e veracidade.",
  correta: "C",
  tema: "Atributos do Ato Administrativo",
  justificativa: "Parte-se do pressuposto de que o ato é válido, até prova em contrário."
},
{
  enunciado: "A presunção de legitimidade é absoluta e não admite contestação.",
  correta: "E",
  tema: "Atributos do Ato Administrativo",
  justificativa: "Ela é relativa e pode ser afastada."
},
{
  enunciado: "A autoexecutoriedade permite que a Administração execute certos atos sem ordem judicial.",
  correta: "C",
  tema: "Atributos do Ato Administrativo",
  justificativa: "É agir diretamente quando a lei autoriza, como remover veículo irregular."
},
{
  enunciado: "Todo ato administrativo é autoexecutório.",
  correta: "E",
  tema: "Atributos do Ato Administrativo",
  justificativa: "A autoexecutoriedade depende de previsão legal ou urgência."
},
{
  enunciado: "A coercibilidade permite a imposição do ato administrativo independentemente da concordância do particular.",
  correta: "C",
  tema: "Atributos do Ato Administrativo",
  justificativa: "É o poder de impor, como uma multa aplicada mesmo sem aceitação."
},
{
  enunciado: "A coercibilidade depende sempre de decisão judicial prévia.",
  correta: "E",
  tema: "Atributos do Ato Administrativo",
  justificativa: "A Administração pode impor coercitivamente nos limites legais."
},
{
  enunciado: "A anulação de ato administrativo ocorre quando há ilegalidade.",
  correta: "C",
  tema: "Anulação e Revogação",
  justificativa: "Ilegalidade exige correção, como apagar algo escrito errado."
},
{
  enunciado: "A revogação de ato administrativo decorre de ilegalidade.",
  correta: "E",
  tema: "Anulação e Revogação",
  justificativa: "Revogação ocorre por conveniência e oportunidade, não por ilegalidade."
},
{
  enunciado: "Atos administrativos podem ser revogados por razões de mérito administrativo.",
  correta: "C",
  tema: "Anulação e Revogação",
  justificativa: "É decidir que algo deixou de ser conveniente, mesmo sendo legal."
},
{
  enunciado: "Atos vinculados podem ser revogados livremente pela Administração.",
  correta: "E",
  tema: "Anulação e Revogação",
  justificativa: "Atos vinculados não admitem juízo de conveniência."
},
{
  enunciado: "A motivação dos atos administrativos contribui para a transparência e controle.",
  correta: "C",
  tema: "Motivação",
  justificativa: "Explicar o motivo é permitir que outros entendam e fiscalizem."
},
{
  enunciado: "A motivação é dispensável em todos os atos administrativos.",
  correta: "E",
  tema: "Motivação",
  justificativa: "A motivação é regra, com exceções pontuais."
},
{
  enunciado: "Os atos administrativos podem ser classificados quanto à natureza do conteúdo em atos normativos, ordinatórios, negociais, enunciativos e punitivos.",
  correta: "C",
  tema: "Classificação dos Atos Administrativos",
  justificativa: "A classificação ajuda a entender a função do ato. É como separar ferramentas por tipo de uso."
},
{
  enunciado: "Atos normativos têm por finalidade criar direitos individuais concretos.",
  correta: "E",
  tema: "Atos Normativos",
  justificativa: "Atos normativos estabelecem regras gerais e abstratas, como um regulamento, não situações individuais."
},
{
  enunciado: "Atos ordinatórios disciplinam o funcionamento interno da Administração e a conduta de seus agentes.",
  correta: "C",
  tema: "Atos Ordinatórios",
  justificativa: "São regras de organização interna, como instruções de serviço e circulares."
},
{
  enunciado: "Atos ordinatórios dependem de autorização judicial para produzir efeitos.",
  correta: "E",
  tema: "Atos Ordinatórios",
  justificativa: "Eles decorrem do poder hierárquico e produzem efeitos internos sem intervenção judicial."
},
{
  enunciado: "Atos negociais dependem da concordância do particular para sua formação.",
  correta: "C",
  tema: "Atos Negociais",
  justificativa: "É como um acordo: a Administração autoriza, mas o particular precisa aceitar."
},
{
  enunciado: "Atos negociais são impostos coercitivamente ao particular.",
  correta: "E",
  tema: "Atos Negociais",
  justificativa: "Coerção é típica de atos de império, não de atos negociais."
},
{
  enunciado: "Atos enunciativos certificam ou atestam situações sem criar obrigações.",
  correta: "C",
  tema: "Atos Enunciativos",
  justificativa: "Funcionam como um espelho: apenas refletem uma situação existente."
},
{
  enunciado: "Atos enunciativos produzem efeitos coercitivos imediatos.",
  correta: "E",
  tema: "Atos Enunciativos",
  justificativa: "Eles apenas declaram ou certificam fatos, sem impor obrigações."
},
{
  enunciado: "Atos punitivos decorrem do poder disciplinar da Administração.",
  correta: "C",
  tema: "Atos Punitivos",
  justificativa: "São aplicados como consequência de infrações, como multas ou sanções."
},
{
  enunciado: "Atos punitivos independem de processo administrativo prévio.",
  correta: "E",
  tema: "Atos Punitivos",
  justificativa: "A punição exige processo com contraditório e ampla defesa."
},
{
  enunciado: "Quanto à formação da vontade, os atos administrativos podem ser simples, complexos ou compostos.",
  correta: "C",
  tema: "Formação do Ato Administrativo",
  justificativa: "É analisar quantas vontades são necessárias para o ato nascer."
},
{
  enunciado: "Atos simples dependem da manifestação de vontade de mais de um órgão.",
  correta: "E",
  tema: "Formação do Ato Administrativo",
  justificativa: "Atos simples resultam da vontade de um único órgão."
},
{
  enunciado: "Atos complexos exigem a manifestação de vontade de mais de um órgão para sua formação.",
  correta: "C",
  tema: "Atos Complexos",
  justificativa: "É como um documento que só vale depois de várias assinaturas."
},
{
  enunciado: "Nos atos compostos, o ato principal só produz efeitos após a prática de um ato acessório.",
  correta: "C",
  tema: "Atos Compostos",
  justificativa: "O ato acessório funciona como condição para eficácia, não para existência."
},
{
  enunciado: "Nos atos compostos, as manifestações de vontade se fundem para formar um único ato.",
  correta: "E",
  tema: "Atos Compostos",
  justificativa: "Isso ocorre nos atos complexos, não nos compostos."
},
{
  enunciado: "Quanto ao grau de liberdade, os atos administrativos podem ser vinculados ou discricionários.",
  correta: "C",
  tema: "Vinculação e Discricionariedade",
  justificativa: "É a diferença entre seguir receita exata ou ter margem de escolha."
},
{
  enunciado: "Nos atos vinculados, a Administração possui liberdade quanto ao mérito do ato.",
  correta: "E",
  tema: "Atos Vinculados",
  justificativa: "Nos atos vinculados, a lei define tudo; não há escolha."
},
{
  enunciado: "Nos atos discricionários, a Administração avalia conveniência e oportunidade.",
  correta: "C",
  tema: "Atos Discricionários",
  justificativa: "É escolher o melhor momento e forma dentro dos limites legais."
},
{
  enunciado: "Atos discricionários estão imunes ao controle judicial.",
  correta: "E",
  tema: "Atos Discricionários",
  justificativa: "O Judiciário controla legalidade, mesmo em atos discricionários."
},
{
  enunciado: "Os elementos do ato administrativo incluem competência, finalidade, forma, motivo e objeto.",
  correta: "C",
  tema: "Elementos do Ato Administrativo",
  justificativa: "São as peças essenciais do ato, como ingredientes de uma receita."
},
{
  enunciado: "A ausência de competência pode ser convalidada em qualquer hipótese.",
  correta: "E",
  tema: "Competência",
  justificativa: "Nem todo vício é sanável; competência nem sempre admite convalidação."
},
{
  enunciado: "A finalidade do ato administrativo deve sempre atender ao interesse público.",
  correta: "C",
  tema: "Finalidade",
  justificativa: "Finalidade é o porquê do ato; desviar é agir com abuso."
},
{
  enunciado: "O desvio de finalidade configura vício insanável do ato administrativo.",
  correta: "C",
  tema: "Vícios do Ato Administrativo",
  justificativa: "Quando o objetivo é ilegítimo, o ato nasce comprometido."
},
{
  enunciado: "A forma do ato administrativo é irrelevante quando o resultado for benéfico.",
  correta: "E",
  tema: "Forma",
  justificativa: "Forma garante controle e segurança jurídica, mesmo com bom resultado."
},
{
  enunciado: "O motivo do ato administrativo corresponde ao pressuposto de fato e de direito que o fundamenta.",
  correta: "C",
  tema: "Motivo",
  justificativa: "O motivo é a base lógica do ato, como a justificativa que sustenta a decisão."
},
{
  enunciado: "A teoria dos motivos determinantes vincula a validade do ato administrativo aos motivos que a Administração declarou como fundamento.",
  correta: "C",
  tema: "Teoria dos Motivos Determinantes",
  justificativa: "Se a Administração explica o porquê do ato, esse motivo vira a base de sustentação. É como justificar uma decisão: se a justificativa cai, a decisão cai junto."
},
{
  enunciado: "A Administração pode indicar motivos falsos sem comprometer a validade do ato, desde que o resultado seja de interesse público.",
  correta: "E",
  tema: "Teoria dos Motivos Determinantes",
  justificativa: "Motivo falso contamina o ato. Não existe interesse público sustentado em fundamento inexistente."
},
{
  enunciado: "A competência é elemento sempre vinculado do ato administrativo.",
  correta: "C",
  tema: "Competência",
  justificativa: "Competência funciona como crachá: só quem tem autorização legal pode praticar o ato."
},
{
  enunciado: "O vício de competência é sempre insanável.",
  correta: "E",
  tema: "Competência",
  justificativa: "Em alguns casos, a competência admite convalidação, desde que não seja exclusiva."
},
{
  enunciado: "A forma do ato administrativo pode ser convalidada quando não causar prejuízo ao interesse público nem a terceiros.",
  correta: "C",
  tema: "Forma",
  justificativa: "A forma é o modo de apresentação do ato. Se o erro não prejudica ninguém, pode ser corrigido."
},
{
  enunciado: "O vício de forma é sempre causa de nulidade absoluta do ato administrativo.",
  correta: "E",
  tema: "Forma",
  justificativa: "Nem todo erro formal invalida o ato. Só quando a forma é essencial."
},
{
  enunciado: "O objeto do ato administrativo corresponde ao efeito jurídico que ele produz.",
  correta: "C",
  tema: "Objeto",
  justificativa: "O objeto é o resultado prático do ato, como a multa aplicada ou a licença concedida."
},
{
  enunciado: "O objeto do ato administrativo pode ser ilícito desde que atenda ao interesse público.",
  correta: "E",
  tema: "Objeto",
  justificativa: "Interesse público não legitima ilegalidade. Objeto ilícito invalida o ato."
},
{
  enunciado: "O motivo do ato administrativo deve ser verdadeiro e compatível com a situação fática.",
  correta: "C",
  tema: "Motivo",
  justificativa: "O motivo é a base da decisão. Se não corresponde à realidade, o ato perde sustentação."
},
{
  enunciado: "A inexistência de motivo invalida apenas os atos discricionários.",
  correta: "E",
  tema: "Motivo",
  justificativa: "A ausência ou falsidade do motivo compromete qualquer ato."
},
{
  enunciado: "Atos administrativos inválidos podem ser anulados pela própria Administração.",
  correta: "C",
  tema: "Autotutela Administrativa",
  justificativa: "A Administração pode corrigir seus erros, como revisar um documento antes que produza efeitos."
},
{
  enunciado: "A anulação de atos administrativos depende sempre de decisão judicial.",
  correta: "E",
  tema: "Autotutela Administrativa",
  justificativa: "A Administração pode anular atos ilegais sem recorrer ao Judiciário."
},
{
  enunciado: "A revogação de ato administrativo ocorre por razões de conveniência e oportunidade.",
  correta: "C",
  tema: "Revogação",
  justificativa: "Revogar é decidir que algo deixou de ser útil, mesmo sendo legal."
},
{
  enunciado: "Atos administrativos vinculados podem ser revogados pela Administração.",
  correta: "E",
  tema: "Revogação",
  justificativa: "Atos vinculados não admitem juízo de conveniência; só podem ser anulados se ilegais."
},
{
  enunciado: "A convalidação é forma de saneamento de atos administrativos com vícios sanáveis.",
  correta: "C",
  tema: "Convalidação",
  justificativa: "Convalidar é corrigir o defeito e manter o ato, como ajustar um erro antes que cause prejuízo."
},
{
  enunciado: "A convalidação pode alcançar atos com desvio de finalidade.",
  correta: "E",
  tema: "Convalidação",
  justificativa: "Desvio de finalidade é vício grave e insanável."
},
{
  enunciado: "O controle judicial dos atos administrativos limita-se, em regra, à legalidade.",
  correta: "C",
  tema: "Controle Judicial",
  justificativa: "O Judiciário verifica se a lei foi respeitada, não se a decisão foi a melhor."
},
{
  enunciado: "O Poder Judiciário pode substituir a Administração no mérito do ato discricionário.",
  correta: "E",
  tema: "Controle Judicial",
  justificativa: "O mérito é reservado à Administração, salvo ilegalidade."
},
{
  enunciado: "O controle administrativo pode ser exercido de ofício ou por provocação.",
  correta: "C",
  tema: "Controle Administrativo",
  justificativa: "A Administração pode agir sozinha ou quando alguém aponta o problema."
},
{
  enunciado: "O controle administrativo é exercido exclusivamente pelos Tribunais de Contas.",
  correta: "E",
  tema: "Controle Administrativo",
  justificativa: "Tribunais de Contas exercem controle externo, não administrativo."
},
{
  enunciado: "O controle legislativo incide sobre atos da Administração Pública.",
  correta: "C",
  tema: "Controle Legislativo",
  justificativa: "O Legislativo fiscaliza a atuação administrativa, reforçando o equilíbrio entre os Poderes."
},
{
  enunciado: "O controle legislativo exclui qualquer forma de controle financeiro.",
  correta: "E",
  tema: "Controle Legislativo",
  justificativa: "O controle legislativo inclui, inclusive, o aspecto financeiro."
},
{
  enunciado: "Os Tribunais de Contas exercem controle externo sobre a Administração Pública.",
  correta: "C",
  tema: "Tribunais de Contas",
  justificativa: "Funcionam como auditores do uso do dinheiro público."
},
{
  enunciado: "As decisões dos Tribunais de Contas possuem natureza exclusivamente jurisdicional.",
  correta: "E",
  tema: "Tribunais de Contas",
  justificativa: "Eles exercem função administrativa de controle, não jurisdicional."
},
{
  enunciado: "O controle interno tem como finalidade apoiar a gestão e prevenir irregularidades na Administração Pública.",
  correta: "C",
  tema: "Controle Interno",
  justificativa: "O controle interno funciona como revisão contínua: corrige o rumo antes que o erro vire problema maior."
},
{
  enunciado: "O controle interno é exercido exclusivamente pelos Tribunais de Contas.",
  correta: "E",
  tema: "Controle Interno",
  justificativa: "Tribunais de Contas exercem controle externo. O controle interno ocorre dentro do próprio órgão."
},
{
  enunciado: "O controle externo da Administração Pública é exercido com o auxílio dos Tribunais de Contas.",
  correta: "C",
  tema: "Controle Externo",
  justificativa: "O Legislativo fiscaliza e conta com apoio técnico dos Tribunais de Contas, como auditores especializados."
},
{
  enunciado: "O controle externo não alcança atos de natureza administrativa.",
  correta: "E",
  tema: "Controle Externo",
  justificativa: "O controle externo incide justamente sobre a atuação administrativa e financeira."
},
{
  enunciado: "A responsabilidade civil do Estado decorre de danos causados a terceiros por agentes públicos no exercício de suas funções.",
  correta: "C",
  tema: "Responsabilidade Civil do Estado",
  justificativa: "Se o Estado causa dano ao cidadão, deve reparar, como quem quebra algo e precisa consertar."
},
{
  enunciado: "A responsabilidade civil do Estado exige comprovação de dolo ou culpa do agente público.",
  correta: "E",
  tema: "Responsabilidade Civil do Estado",
  justificativa: "Em regra, a responsabilidade é objetiva: basta dano, ação e nexo causal."
},
{
  enunciado: "A teoria do risco administrativo fundamenta a responsabilidade objetiva do Estado.",
  correta: "C",
  tema: "Responsabilidade Civil do Estado",
  justificativa: "Quem assume o risco da atividade responde pelos danos dela decorrentes."
},
{
  enunciado: "Pela teoria do risco integral, o Estado pode afastar sua responsabilidade em qualquer hipótese.",
  correta: "E",
  tema: "Responsabilidade Civil do Estado",
  justificativa: "No risco integral, não há excludentes; o Estado responde sempre."
},
{
  enunciado: "A responsabilidade do Estado pode ser afastada em caso de culpa exclusiva da vítima.",
  correta: "C",
  tema: "Excludentes de Responsabilidade",
  justificativa: "Se o dano ocorreu apenas por culpa da vítima, o nexo causal é rompido."
},
{
  enunciado: "O caso fortuito e a força maior sempre afastam a responsabilidade civil do Estado.",
  correta: "E",
  tema: "Excludentes de Responsabilidade",
  justificativa: "Nem sempre afastam; depende da existência de nexo causal."
},
{
  enunciado: "O direito de regresso permite ao Estado cobrar do agente público o valor pago a título de indenização.",
  correta: "C",
  tema: "Direito de Regresso",
  justificativa: "Após indenizar o cidadão, o Estado pode buscar ressarcimento do agente culpado."
},
{
  enunciado: "O direito de regresso independe da comprovação de dolo ou culpa do agente.",
  correta: "E",
  tema: "Direito de Regresso",
  justificativa: "Para regressar contra o agente, é necessário provar dolo ou culpa."
},
{
  enunciado: "Os agentes públicos submetem-se a regimes jurídicos distintos, conforme a natureza do vínculo.",
  correta: "C",
  tema: "Agentes Públicos",
  justificativa: "Servidor efetivo, comissionado e temporário seguem regras diferentes."
},
{
  enunciado: "Empregados públicos estão submetidos ao regime estatutário.",
  correta: "E",
  tema: "Agentes Públicos",
  justificativa: "Empregados públicos se submetem ao regime celetista."
},
{
  enunciado: "Os atos praticados por agentes públicos no exercício da função são imputáveis à Administração.",
  correta: "C",
  tema: "Atos dos Agentes Públicos",
  justificativa: "O agente atua como longa manus do Estado."
},
{
  enunciado: "O agente público responde diretamente perante o particular, excluída a responsabilidade do Estado.",
  correta: "E",
  tema: "Atos dos Agentes Públicos",
  justificativa: "A responsabilidade primária é do Estado, não do agente."
},
{
  enunciado: "O princípio da continuidade do serviço público impede sua interrupção injustificada.",
  correta: "C",
  tema: "Serviço Público",
  justificativa: "Serviço público é como fornecimento de água: não pode parar sem motivo."
},
{
  enunciado: "A continuidade do serviço público é absoluta e não admite exceções.",
  correta: "E",
  tema: "Serviço Público",
  justificativa: "Há exceções, como manutenção programada ou greve nos limites legais."
},
{
  enunciado: "A delegação de serviços públicos pode ocorrer por concessão ou permissão.",
  correta: "C",
  tema: "Delegação de Serviços Públicos",
  justificativa: "O Estado pode transferir a execução, mantendo a titularidade."
},
{
  enunciado: "A permissão de serviço público confere direito adquirido ao permissionário.",
  correta: "E",
  tema: "Delegação de Serviços Públicos",
  justificativa: "Permissão é precária e pode ser revogada."
},
{
  enunciado: "O regime jurídico-administrativo confere prerrogativas e sujeições à Administração Pública.",
  correta: "C",
  tema: "Regime Jurídico-Administrativo",
  justificativa: "É um equilíbrio entre poderes especiais e deveres reforçados."
},
{
  enunciado: "As prerrogativas administrativas existem para beneficiar o agente público.",
  correta: "E",
  tema: "Regime Jurídico-Administrativo",
  justificativa: "As prerrogativas servem ao interesse público, não ao agente."
},
{
  enunciado: "A Administração Pública deve observar o princípio da autotutela.",
  correta: "C",
  tema: "Autotutela",
  justificativa: "A Administração pode revisar seus próprios atos para corrigir ilegalidades."
},
{
  enunciado: "A autotutela administrativa impede o controle judicial.",
  correta: "E",
  tema: "Autotutela",
  justificativa: "O controle judicial permanece possível."
},
{
  enunciado: "Os serviços públicos podem ser classificados quanto à essencialidade em serviços essenciais e não essenciais.",
  correta: "C",
  tema: "Classificação dos Serviços Públicos",
  justificativa: "A classificação ajuda a definir o grau de proteção do serviço. É como separar itens de primeira necessidade dos supérfluos."
},
{
  enunciado: "Os serviços públicos essenciais podem ser interrompidos livremente pela Administração.",
  correta: "E",
  tema: "Serviços Essenciais",
  justificativa: "Serviços essenciais só admitem interrupção em situações excepcionais e justificadas."
},
{
  enunciado: "A greve no serviço público deve observar limites impostos pelo interesse da coletividade.",
  correta: "C",
  tema: "Greve no Serviço Público",
  justificativa: "A greve existe, mas não pode paralisar totalmente serviços indispensáveis à sociedade."
},
{
  enunciado: "A greve no serviço público é vedada em qualquer hipótese.",
  correta: "E",
  tema: "Greve no Serviço Público",
  justificativa: "A greve é admitida, desde que observadas restrições legais."
},
{
  enunciado: "O poder de polícia administrativa pode incidir sobre bens, atividades e direitos.",
  correta: "C",
  tema: "Poder de Polícia",
  justificativa: "O poder de polícia atua como fiscalização geral para garantir ordem e segurança."
},
{
  enunciado: "O poder de polícia é exercido exclusivamente de forma repressiva.",
  correta: "E",
  tema: "Poder de Polícia",
  justificativa: "Pode ser preventivo, fiscalizador ou repressivo."
},
{
  enunciado: "O ciclo do poder de polícia compreende as fases de legislação, consentimento, fiscalização e sanção.",
  correta: "C",
  tema: "Ciclo do Poder de Polícia",
  justificativa: "É como um processo em etapas: criar regra, autorizar, fiscalizar e punir se necessário."
},
{
  enunciado: "A aplicação de sanção prescinde das fases anteriores do ciclo do poder de polícia.",
  correta: "E",
  tema: "Ciclo do Poder de Polícia",
  justificativa: "A sanção é etapa final, não ponto de partida."
},
{
  enunciado: "O poder de polícia pode ser delegado a pessoas jurídicas de direito privado, em determinadas hipóteses.",
  correta: "C",
  tema: "Delegação do Poder de Polícia",
  justificativa: "A execução material pode ser delegada, mantendo-se a titularidade estatal."
},
{
  enunciado: "A delegação do poder de polícia transfere a titularidade do poder ao particular.",
  correta: "E",
  tema: "Delegação do Poder de Polícia",
  justificativa: "A titularidade permanece com o Estado."
},
{
  enunciado: "Os bens públicos podem ser classificados em bens de uso comum do povo, de uso especial e dominicais.",
  correta: "C",
  tema: "Bens Públicos",
  justificativa: "A classificação define a forma de uso e proteção do bem."
},
{
  enunciado: "Bens de uso comum do povo são passíveis de alienação direta.",
  correta: "E",
  tema: "Bens Públicos",
  justificativa: "Esses bens são, em regra, inalienáveis enquanto mantida sua destinação."
},
{
  enunciado: "Os bens públicos são, em regra, imprescritíveis.",
  correta: "C",
  tema: "Bens Públicos",
  justificativa: "O tempo não faz o Estado perder seus bens."
},
{
  enunciado: "A imprescritibilidade impede qualquer forma de uso por particulares.",
  correta: "E",
  tema: "Bens Públicos",
  justificativa: "O uso pode ocorrer mediante autorização, permissão ou concessão."
},
{
  enunciado: "Os bens públicos são impenhoráveis, em regra.",
  correta: "C",
  tema: "Bens Públicos",
  justificativa: "Eles não podem ser tomados para pagamento de dívidas."
},
{
  enunciado: "A impenhorabilidade dos bens públicos admite exceções amplas.",
  correta: "E",
  tema: "Bens Públicos",
  justificativa: "A regra é a proteção ampla do patrimônio público."
},
{
  enunciado: "O uso privativo de bem público depende de ato administrativo que o autorize.",
  correta: "C",
  tema: "Uso de Bens Públicos",
  justificativa: "Usar bem público de forma exclusiva exige autorização formal."
},
{
  enunciado: "A autorização de uso de bem público confere direito adquirido ao particular.",
  correta: "E",
  tema: "Uso de Bens Públicos",
  justificativa: "A autorização é ato precário e revogável."
},
{
  enunciado: "A concessão de uso de bem público é formalizada por contrato administrativo.",
  correta: "C",
  tema: "Uso de Bens Públicos",
  justificativa: "A concessão cria vínculo mais estável e formal."
},
{
  enunciado: "A concessão de uso é sempre ato unilateral da Administração.",
  correta: "E",
  tema: "Uso de Bens Públicos",
  justificativa: "Por envolver contrato, depende da concordância do particular."
},
{
  enunciado: "A desapropriação é forma originária de aquisição da propriedade pelo Estado.",
  correta: "C",
  tema: "Desapropriação",
  justificativa: "O Estado adquire o bem rompendo vínculos anteriores."
},
{
  enunciado: "A desapropriação pode ocorrer sem indenização em qualquer hipótese.",
  correta: "E",
  tema: "Desapropriação",
  justificativa: "A regra é indenização justa, prévia e em dinheiro."
},
{
  enunciado: "A requisição administrativa é medida excepcional, vinculada a situações urgentes.",
  correta: "C",
  tema: "Requisição Administrativa",
  justificativa: "É como usar um recurso alheio em emergência para evitar dano maior."
},
{
  enunciado: "A requisição administrativa depende sempre de indenização prévia.",
  correta: "E",
  tema: "Requisição Administrativa",
  justificativa: "A indenização é posterior, se houver dano."
},
{
  enunciado: "A licitação é procedimento administrativo destinado a assegurar a seleção da proposta mais vantajosa para a Administração.",
  correta: "C",
  tema: "Licitação – Conceito e Finalidade",
  justificativa: "A licitação funciona como uma competição regulada: ganha quem oferece a melhor combinação de preço e qualidade."
},
{
  enunciado: "A licitação tem como finalidade exclusiva a obtenção do menor preço.",
  correta: "E",
  tema: "Licitação – Conceito e Finalidade",
  justificativa: "A proposta mais vantajosa não se resume ao preço; envolve técnica, qualidade e atendimento ao interesse público."
},
{
  enunciado: "A obrigatoriedade de licitar decorre do princípio da isonomia entre os interessados.",
  correta: "C",
  tema: "Princípios da Licitação",
  justificativa: "A licitação garante igualdade de chances, como uma corrida em que todos largam do mesmo ponto."
},
{
  enunciado: "O princípio da isonomia admite favorecimento de determinado licitante quando houver interesse público.",
  correta: "E",
  tema: "Princípios da Licitação",
  justificativa: "Favorecimento viola a isonomia. Interesse público não autoriza privilégio indevido."
},
{
  enunciado: "A vinculação ao instrumento convocatório obriga a Administração e os licitantes a seguirem as regras do edital.",
  correta: "C",
  tema: "Vinculação ao Edital",
  justificativa: "O edital é a regra do jogo. Depois de publicado, ninguém pode mudar as regras."
},
{
  enunciado: "A Administração pode descumprir o edital se entender mais conveniente durante o certame.",
  correta: "E",
  tema: "Vinculação ao Edital",
  justificativa: "Conveniência não autoriza violar regras previamente estabelecidas."
},
{
  enunciado: "O julgamento objetivo das propostas impede decisões baseadas em critérios subjetivos.",
  correta: "C",
  tema: "Julgamento Objetivo",
  justificativa: "Critérios objetivos funcionam como régua: todos são medidos da mesma forma."
},
{
  enunciado: "O julgamento objetivo permite avaliações discricionárias da comissão de licitação.",
  correta: "E",
  tema: "Julgamento Objetivo",
  justificativa: "Discricionariedade ampla compromete a igualdade e a transparência."
},
{
  enunciado: "A adjudicação consiste no ato que atribui ao vencedor o objeto da licitação.",
  correta: "C",
  tema: "Adjudicação",
  justificativa: "Adjudicar é declarar oficialmente quem venceu a disputa."
},
{
  enunciado: "A adjudicação garante ao vencedor direito adquirido à contratação.",
  correta: "E",
  tema: "Adjudicação",
  justificativa: "A adjudicação gera expectativa de direito, não direito adquirido absoluto."
},
{
  enunciado: "A homologação é o ato pelo qual a autoridade competente confirma a regularidade da licitação.",
  correta: "C",
  tema: "Homologação",
  justificativa: "Homologar é revisar e validar o processo, como um carimbo final de conferência."
},
{
  enunciado: "A homologação é ato vinculado, sem margem para análise de legalidade.",
  correta: "E",
  tema: "Homologação",
  justificativa: "A autoridade analisa a legalidade e pode deixar de homologar se houver vícios."
},
{
  enunciado: "A contratação direta constitui exceção ao dever de licitar.",
  correta: "C",
  tema: "Contratação Direta",
  justificativa: "A regra é licitar; contratar direto é exceção expressa em lei."
},
{
  enunciado: "A inexigibilidade de licitação ocorre quando há inviabilidade de competição.",
  correta: "C",
  tema: "Inexigibilidade",
  justificativa: "Sem competição possível, não há como comparar propostas."
},
{
  enunciado: "A inexigibilidade depende de escolha discricionária da Administração.",
  correta: "E",
  tema: "Inexigibilidade",
  justificativa: "Ela decorre de situação objetiva prevista em lei."
},
{
  enunciado: "A dispensa de licitação ocorre nas hipóteses expressamente previstas em lei.",
  correta: "C",
  tema: "Dispensa de Licitação",
  justificativa: "A lei lista quando é possível dispensar a licitação."
},
{
  enunciado: "A dispensa de licitação decorre da impossibilidade de competição.",
  correta: "E",
  tema: "Dispensa de Licitação",
  justificativa: "Isso caracteriza inexigibilidade, não dispensa."
},
{
  enunciado: "Os contratos administrativos possuem cláusulas exorbitantes que os diferenciam dos contratos privados.",
  correta: "C",
  tema: "Contratos Administrativos",
  justificativa: "As cláusulas exorbitantes são poderes especiais do Estado para proteger o interesse público."
},
{
  enunciado: "As cláusulas exorbitantes colocam a Administração em situação de igualdade com o contratado.",
  correta: "E",
  tema: "Contratos Administrativos",
  justificativa: "Elas conferem supremacia à Administração, não igualdade."
},
{
  enunciado: "A Administração pode modificar unilateralmente o contrato administrativo nos limites legais.",
  correta: "C",
  tema: "Alterações Contratuais",
  justificativa: "A lei permite ajustes para atender ao interesse público, respeitando limites."
},
{
  enunciado: "A modificação unilateral do contrato dispensa a recomposição do equilíbrio econômico-financeiro.",
  correta: "E",
  tema: "Alterações Contratuais",
  justificativa: "Alterações podem exigir recomposição para manter justiça contratual."
},
{
  enunciado: "A rescisão unilateral do contrato administrativo exige motivação.",
  correta: "C",
  tema: "Rescisão Contratual",
  justificativa: "Rescindir é medida grave e precisa ser justificada formalmente."
},
{
  enunciado: "A rescisão unilateral pode ocorrer sem qualquer justificativa quando houver interesse público.",
  correta: "E",
  tema: "Rescisão Contratual",
  justificativa: "Mesmo o interesse público exige motivação clara."
},
{
  enunciado: "A aplicação de sanções contratuais deve observar o contraditório e a ampla defesa.",
  correta: "C",
  tema: "Sanções Administrativas",
  justificativa: "Punir sem ouvir viola o devido processo administrativo."
},
{
  enunciado: "As sanções administrativas podem ser aplicadas sem processo prévio.",
  correta: "E",
  tema: "Sanções Administrativas",
  justificativa: "A sanção exige processo para garantir justiça e legalidade."
},
{
  enunciado: "A anulação de licitação pode ocorrer quando constatada ilegalidade insanável no procedimento.",
  correta: "C",
  tema: "Anulação de Licitação",
  justificativa: "Anular é corrigir o que nasceu errado. É como cancelar um jogo porque as regras foram violadas desde o início."
},
{
  enunciado: "A anulação da licitação gera direito à indenização automática a todos os licitantes.",
  correta: "E",
  tema: "Anulação de Licitação",
  justificativa: "Só há indenização se houver prejuízo comprovado e responsabilidade da Administração."
},
{
  enunciado: "A revogação da licitação decorre de razões de conveniência e oportunidade.",
  correta: "C",
  tema: "Revogação de Licitação",
  justificativa: "Revogar é desistir por não ser mais útil, mesmo estando tudo legal, como cancelar uma viagem por mudança de planos."
},
{
  enunciado: "A revogação da licitação exige a comprovação de ilegalidade no certame.",
  correta: "E",
  tema: "Revogação de Licitação",
  justificativa: "Ilegalidade leva à anulação, não à revogação."
},
{
  enunciado: "A invalidação de contrato administrativo pode decorrer da nulidade da licitação que lhe deu origem.",
  correta: "C",
  tema: "Invalidação Contratual",
  justificativa: "Se a base cai, o que foi construído em cima também cai."
},
{
  enunciado: "A nulidade do contrato administrativo sempre impede o pagamento por serviços efetivamente prestados.",
  correta: "E",
  tema: "Invalidação Contratual",
  justificativa: "Pode haver indenização para evitar enriquecimento sem causa da Administração."
},
{
  enunciado: "A formalização dos contratos administrativos contribui para a segurança jurídica das partes.",
  correta: "C",
  tema: "Formalização Contratual",
  justificativa: "Contrato formal é como recibo: registra o combinado e evita dúvidas futuras."
},
{
  enunciado: "A execução do contrato administrativo independe de designação formal de gestor ou fiscal.",
  correta: "E",
  tema: "Gestão Contratual",
  justificativa: "A designação é essencial para acompanhamento e controle."
},
{
  enunciado: "O gestor do contrato é responsável pelo acompanhamento global da execução contratual.",
  correta: "C",
  tema: "Gestor do Contrato",
  justificativa: "O gestor atua como maestro, coordenando a execução."
},
{
  enunciado: "O fiscal do contrato substitui integralmente o gestor contratual.",
  correta: "E",
  tema: "Fiscal do Contrato",
  justificativa: "As funções são complementares, não substitutivas."
},
{
  enunciado: "O recebimento provisório do objeto antecede o recebimento definitivo do contrato.",
  correta: "C",
  tema: "Recebimento do Objeto",
  justificativa: "É como testar antes de aceitar definitivamente."
},
{
  enunciado: "O recebimento definitivo dispensa qualquer verificação do objeto contratado.",
  correta: "E",
  tema: "Recebimento do Objeto",
  justificativa: "O definitivo ocorre após conferência completa."
},
{
  enunciado: "A Administração pode aplicar penalidades contratuais proporcionais à gravidade da infração.",
  correta: "C",
  tema: "Sanções Contratuais",
  justificativa: "Punir na medida certa evita injustiça e excessos."
},
{
  enunciado: "A aplicação de penalidades contratuais prescinde de motivação.",
  correta: "E",
  tema: "Sanções Contratuais",
  justificativa: "Toda penalidade exige fundamentação clara."
},
{
  enunciado: "O equilíbrio econômico-financeiro do contrato deve ser mantido ao longo da execução.",
  correta: "C",
  tema: "Equilíbrio Econômico-Financeiro",
  justificativa: "É manter a balança equilibrada para garantir execução justa."
},
{
  enunciado: "O equilíbrio econômico-financeiro beneficia apenas o contratado.",
  correta: "E",
  tema: "Equilíbrio Econômico-Financeiro",
  justificativa: "O equilíbrio interessa a ambas as partes e à continuidade do serviço."
},
{
  enunciado: "A extinção do contrato administrativo pode ocorrer por conclusão do objeto.",
  correta: "C",
  tema: "Extinção do Contrato",
  justificativa: "Quando o objetivo é alcançado, o contrato cumpre sua função."
},
{
  enunciado: "A conclusão do objeto dispensa formalização do encerramento contratual.",
  correta: "E",
  tema: "Extinção do Contrato",
  justificativa: "Formalizar é necessário para segurança jurídica."
},
{
  enunciado: "A rescisão unilateral do contrato administrativo exige prévia motivação.",
  correta: "C",
  tema: "Rescisão Contratual",
  justificativa: "Decisão unilateral precisa de justificativa formal."
},
{
  enunciado: "A rescisão unilateral pode ocorrer sem contraditório em qualquer hipótese.",
  correta: "E",
  tema: "Rescisão Contratual",
  justificativa: "O contraditório é regra, salvo exceções legais."
},
{
  enunciado: "A documentação do processo licitatório e contratual deve ser preservada para fins de controle.",
  correta: "C",
  tema: "Documentação Administrativa",
  justificativa: "Documentar é manter memória e permitir fiscalização."
},
{
  enunciado: "Após o encerramento do contrato, a guarda da documentação perde relevância.",
  correta: "E",
  tema: "Documentação Administrativa",
  justificativa: "Os registros continuam sendo prova e referência."
},
{
  enunciado: "A transparência nas contratações públicas fortalece o controle social.",
  correta: "C",
  tema: "Transparência",
  justificativa: "Transparência é como luz: permite que todos vejam e fiscalizem."
},
{
  enunciado: "O controle social substitui os controles institucionalizados da Administração.",
  correta: "E",
  tema: "Transparência",
  justificativa: "O controle social complementa, não substitui, os controles formais."
},
{
  enunciado: "A boa governança pública busca eficiência, integridade e geração de valor público.",
  correta: "C",
  tema: "Governança Pública",
  justificativa: "Governar bem é entregar resultados corretos com responsabilidade."
},
{
  enunciado: "A governança pública se limita ao cumprimento formal de normas legais.",
  correta: "E",
  tema: "Governança Pública",
  justificativa: "Governança vai além da legalidade, envolvendo estratégia e resultados."
},

];
