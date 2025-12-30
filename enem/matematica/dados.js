const conteudos = {
  "razao": {
    titulo: "Razão, Proporção e Regra de Três",
    conteudo: `
<section>
  <h2>1️⃣ Razão</h2>

  <p>
    Razão é uma <strong>comparação entre duas quantidades</strong>.
    Ela mostra quantas vezes uma quantidade contém a outra.
  </p>

  <p>
    Toda razão é escrita em forma de divisão.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula da Razão</strong><br>
    R = A / B<br>
    <small>A = antecedente | B = consequente (B ≠ 0)</small>
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em uma sala há 18 alunos e 6 computadores.
    Qual é a razão entre alunos e computadores?
    <br><br>

    <strong>Resolução:</strong><br>
    Razão = alunos / computadores<br>
    Razão = 18 / 6<br>
    Razão = 3
    <br><br>

    <strong>Resposta:</strong><br>
    A razão é 3, ou seja, existem 3 alunos para cada computador.
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Proporção</h2>

  <p>
    Proporção ocorre quando <strong>duas razões são iguais</strong>.
    Isso significa que a relação entre as quantidades foi mantida.
  </p>

  <div class="caixa-formula">
    <strong>Proporção</strong><br>
    A / B = C / D<br><br>
    <strong>Propriedade Fundamental</strong><br>
    A × D = B × C
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Se 4 camisetas custam R$ 80,
    quanto custam 7 camisetas mantendo o mesmo preço?
    <br><br>

    <strong>Resolução:</strong><br>
    4 / 80 = 7 / x<br><br>

    Multiplicando cruzado:<br>
    4 × x = 80 × 7<br>
    4x = 560<br>
    x = 140
    <br><br>

    <strong>Resposta:</strong><br>
    7 camisetas custam R$ 140.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Regra de Três</h2>

  <p>
    A regra de três é usada quando conhecemos
    <strong>três valores</strong> e queremos descobrir <strong>um quarto</strong>.
  </p>

  <hr>

  <h3>Regra de Três Direta</h3>

  <p>
    É direta quando:
    <strong>se uma quantidade aumenta, a outra também aumenta</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Se 5 litros de tinta pintam 40 m²,
    quantos metros quadrados podem ser pintados com 8 litros?
    <br><br>

    <strong>Resolução:</strong><br>
    5 litros → 40 m²<br>
    8 litros → x m²<br><br>

    Multiplicação cruzada:<br>
    5 × x = 8 × 40<br>
    5x = 320<br>
    x = 64
    <br><br>

    <strong>Resposta:</strong><br>
    8 litros de tinta pintam 64 m².
  </div>

  <hr>

  <h3>Regra de Três Inversa</h3>

  <p>
    É inversa quando:
    <strong>se uma quantidade aumenta, a outra diminui</strong>.
  </p>

  <div class="caixa-aviso">
    Na regra de três inversa, NÃO se multiplica cruzado.
    Multiplica-se em linha reta.
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    6 trabalhadores constroem um muro em 10 dias.
    Em quantos dias 12 trabalhadores constroem o mesmo muro?
    <br><br>

    <strong>Resolução:</strong><br>
    Mais trabalhadores → menos dias (relação inversa)<br><br>

    6 × 10 = 12 × x<br>
    60 = 12x<br>
    x = 5
    <br><br>

    <strong>Resposta:</strong><br>
    12 trabalhadores constroem o muro em 5 dias.
  </div>
</section>
`
  },

  "porcentagem": {
    titulo: "Porcentagem e Juros Simples",
    conteudo: `
<section>
  <h2>1️⃣ Porcentagem</h2>

  <p>
    Porcentagem significa literalmente <strong>“por cem”</strong>.
    Sempre que você vê o símbolo <strong>%</strong>, pense em uma parte de 100.
  </p>

  <p>
    Por exemplo:
    10% significa 10 partes de um total de 100.
  </p>

  <div class="caixa-formula">
    <strong>Forma Matemática da Porcentagem</strong><br>
    p% = p / 100
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Quanto é 25% de 200?
    <br><br>

    <strong>Resolução:</strong><br>
    25% = 25 / 100<br>
    25% de 200 = (25 / 100) × 200<br>
    = 0,25 × 200<br>
    = 50
    <br><br>

    <strong>Resposta:</strong><br>
    25% de 200 é 50.
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Um produto custa R$ 80.
    Ele teve um desconto de 10%.
    Qual é o novo preço?
    <br><br>

    <strong>Resolução:</strong><br>
    10% de 80 = (10 / 100) × 80<br>
    10% de 80 = 8<br><br>

    Novo preço = 80 − 8 = 72
    <br><br>

    <strong>Resposta:</strong><br>
    O novo preço é R$ 72.
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Juros Simples</h2>

  <p>
    Juros simples acontecem quando o <strong>juros é calculado
    sempre sobre o valor inicial</strong>, chamado de capital.
  </p>

  <p>
    Diferente dos juros compostos, aqui o valor do juros
    <strong>não cresce sobre ele mesmo</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula dos Juros Simples</strong><br>
    J = C × i × t<br><br>
    <small>
      J = juros<br>
      C = capital (valor inicial)<br>
      i = taxa (em forma decimal)<br>
      t = tempo
    </small>
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Uma pessoa emprestou R$ 1.000 a juros simples,
    com taxa de 5% ao mês, durante 4 meses.
    Quanto será o valor dos juros?
    <br><br>

    <strong>Resolução:</strong><br>
    C = 1000<br>
    i = 5% = 0,05<br>
    t = 4<br><br>

    J = 1000 × 0,05 × 4<br>
    J = 200
    <br><br>

    <strong>Resposta:</strong><br>
    O valor dos juros é R$ 200.
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Um capital de R$ 600 foi aplicado a juros simples
    de 2% ao mês por 10 meses.
    Qual será o valor total ao final?
    <br><br>

    <strong>Resolução:</strong><br>
    Primeiro, calculamos os juros:<br>
    J = 600 × 0,02 × 10<br>
    J = 120<br><br>

    Valor total = Capital + Juros<br>
    Valor total = 600 + 120 = 720
    <br><br>

    <strong>Resposta:</strong><br>
    O valor final será R$ 720.
  </div>
</section>
`
 },
 
  "escala": {
    titulo: "Escalas Numéricas e Gráficas",
    conteudo: `
<section>
  <h2>1️⃣ Escala Numérica</h2>

  <p>
    Escala numérica é a <strong>relação entre a medida no desenho
    e a medida real</strong>.
  </p>

  <p>
    Ela geralmente aparece assim:
    <strong>1 : 100</strong>, <strong>1 : 1.000</strong>, <strong>1 : 50.000</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula da Escala Numérica</strong><br>
    Escala = Medida no desenho / Medida real
  </div>

  <p>
    As duas medidas devem estar <strong>na mesma unidade</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em um mapa com escala 1 : 1.000,
    uma estrada mede 6 cm no mapa.
    Qual é a distância real?
    <br><br>

    <strong>Resolução:</strong><br>
    1 cm → 1.000 cm<br>
    6 cm → x cm<br><br>

    x = 6 × 1.000<br>
    x = 6.000 cm<br><br>

    Convertendo:<br>
    6.000 cm ÷ 100 = 60 m
    <br><br>

    <strong>Resposta:</strong><br>
    A distância real é 60 metros.
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Descobrindo a Escala</h2>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Um desenho mostra um campo com 5 cm.
    Na realidade, o campo mede 250 m.
    Qual é a escala?
    <br><br>

    <strong>Resolução:</strong><br>
    Transformando tudo em cm:<br>
    250 m = 25.000 cm<br><br>

    Escala = desenho / real<br>
    Escala = 5 / 25.000<br>
    Escala = 1 / 5.000
    <br><br>

    <strong>Resposta:</strong><br>
    A escala é 1 : 5.000.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Escala Gráfica</h2>

  <p>
    Escala gráfica é representada por uma
    <strong>barra dividida em partes</strong>,
    onde cada parte indica uma distância real.
  </p>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em uma escala gráfica, cada divisão representa 2 km.
    A distância entre dois pontos mede 4 divisões.
    Qual é a distância real?
    <br><br>

    <strong>Resolução:</strong><br>
    1 divisão → 2 km<br>
    4 divisões → x km<br><br>

    x = 4 × 2<br>
    x = 8
    <br><br>

    <strong>Resposta:</strong><br>
    A distância real é 8 km.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Comparação Importante</h2>

  <ul>
    <li><strong>Escala Numérica:</strong> usa números (ex: 1 : 1.000)</li>
    <li><strong>Escala Gráfica:</strong> usa barras visuais</li>
  </ul>

  <div class="caixa-aviso">
    Quanto maior o número da escala,
    menor será o detalhe do mapa.
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br><br>

    <strong>Escala Numérica:</strong><br>
    Um mapa de uma cidade usa a escala <strong>1 : 10.000</strong>.<br>
    Isso significa que 1 cm no mapa representa 10.000 cm na realidade.
    <br><br>

    <strong>Escala Gráfica:</strong><br>
    No mesmo mapa, existe uma barra dividida em partes,
    onde cada divisão representa <strong>1 km</strong>.
    Medindo a barra, é possível saber a distância real sem fazer contas.
    <br><br>

    <strong>Conclusão:</strong><br>
    A escala numérica usa números (1 : 10.000),
    enquanto a escala gráfica usa uma representação visual em forma de barra.
  </div>


</section>
`
  },
  "fracoes": {
  titulo: "Operações com Frações e Decimais",
  conteudo: `
<section>
  <h2>1️⃣ Frações</h2>

  <p>
    Fração representa uma <strong>parte de um todo</strong>
    e é formada por numerador e denominador.
  </p>

  <div class="caixa-formula">
    <strong>Forma Geral da Fração</strong><br>
    a / b<br>
    <small>a = numerador | b = denominador (b ≠ 0)</small>
  </div>

  <h3>➕ Adição e ➖ Subtração</h3>

  <p>
    Para somar ou subtrair frações,
    é necessário que os <strong>denominadores sejam iguais</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    1/4 + 2/4 = 3/4
  </div>

  <h3>✖️ Multiplicação</h3>

  <p>
    Multiplica-se numerador com numerador
    e denominador com denominador.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    2/3 × 4/5 = 8/15
  </div>

  <h3>➗ Divisão</h3>

  <p>
    Na divisão de frações,
    mantém-se a primeira e multiplica-se pelo inverso da segunda.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Números Decimais</h2>

  <p>
    Números decimais são outra forma
    de representar frações, usando vírgula.
  </p>

  <h3>➕ Adição e ➖ Subtração</h3>

  <p>
    Alinha-se a <strong>vírgula</strong> e realiza-se a conta normalmente.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    2,5 + 1,75 = 4,25
  </div>

  <h3>✖️ Multiplicação</h3>

  <p>
    Multiplica-se normalmente e,
    no resultado, conta-se o número total de casas decimais.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    1,2 × 0,5 = 0,6
  </div>

  <h3>➗ Divisão</h3>

  <p>
    Move-se a vírgula do divisor
    para transformá-lo em número inteiro.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    4,5 ÷ 0,5 = 9
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Frações e Decimais</h2>

  <p>
    Frações podem ser transformadas em decimais
    dividindo o numerador pelo denominador.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    1/4 = 1 ÷ 4 = 0,25
  </div>
</section>
`
 },
 "potencia": {
  titulo: "Potenciação e Radiciação",
  conteudo: `
<section>
  <h2>1️⃣ Potenciação</h2>

  <p>
    Potenciação é uma forma de representar
    <strong>multiplicações repetidas</strong>
    de um mesmo número.
  </p>

  <div class="caixa-formula">
    <strong>Forma da Potência</strong><br>
    aⁿ = a × a × a × ... (n vezes)<br>
    <small>a = base | n = expoente</small>
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Quanto vale 2³?
    <br><br>

    <strong>Resolução:</strong><br>
    2³ = 2 × 2 × 2<br>
    2³ = 8
    <br><br>

    <strong>Resposta:</strong><br>
    O valor é 8.
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Propriedades da Potenciação</h2>

  <div class="caixa-formula">
    aᵐ × aⁿ = aᵐ⁺ⁿ<br><br>
    aᵐ ÷ aⁿ = aᵐ⁻ⁿ (a ≠ 0)<br><br>
    (aᵐ)ⁿ = aᵐⁿ
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule: 2² × 2³
    <br><br>

    <strong>Resolução:</strong><br>
    2² × 2³ = 2²⁺³<br>
    2⁵ = 32
    <br><br>

    <strong>Resposta:</strong><br>
    O resultado é 32.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Expoentes Especiais</h2>

  <div class="caixa-formula">
    a¹ = a<br>
    a⁰ = 1 (a ≠ 0)
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Quanto vale 5⁰?
    <br><br>

    <strong>Resolução:</strong><br>
    Todo número elevado a zero é 1.
    <br><br>

    <strong>Resposta:</strong><br>
    5⁰ = 1
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Radiciação</h2>

  <p>
    Radiciação é a <strong>operação inversa da potenciação</strong>.
    Ela busca descobrir qual número elevado a uma potência
    gera um determinado valor.
  </p>

  <div class="caixa-formula">
    <strong>Forma da Raiz</strong><br>
    ⁿ√a = b<br>
    <small>Se bⁿ = a</small>
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Qual é a raiz quadrada de 16?
    <br><br>

    <strong>Resolução:</strong><br>
    4² = 16
    <br><br>

    <strong>Resposta:</strong><br>
    √16 = 4
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Raiz Quadrada e Raiz Cúbica</h2>

  <div class="caixa-formula">
    √a → raiz quadrada (índice 2)<br>
    ³√a → raiz cúbica (índice 3)
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule √49 e ³√27
    <br><br>

    <strong>Resolução:</strong><br>
    √49 = 7<br>
    ³√27 = 3
    <br><br>

    <strong>Resposta:</strong><br>
    Os valores são 7 e 3.
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Relação entre Potência e Raiz</h2>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule: √(2⁴)
    <br><br>

    <strong>Resolução:</strong><br>
    2⁴ = 16<br>
    √16 = 4
    <br><br>

    <strong>Resposta:</strong><br>
    O resultado é 4.
  </div>

  <div class="caixa-aviso">
    A raiz "desfaz" a potência.
  </div>
</section>
`
},
 "unidades": {
  titulo: "Unidades de Medida e Conversão",
  conteudo: `
<section>
  <h2>1️⃣ O que são Unidades de Medida?</h2>

  <p>
    Unidades de medida servem para
    <strong>quantificar grandezas</strong>,
    como comprimento, massa, tempo e capacidade.
  </p>

  <div class="caixa-exemplo">
    Exemplos de grandezas:<br>
    • Comprimento<br>
    • Massa<br>
    • Tempo<br>
    • Capacidade
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Unidades de Comprimento</h2>

  <div class="caixa-formula">
    km → hm → dam → m → dm → cm → mm
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Quantos centímetros há em 1 metro?
    <br><br>

    <strong>Resolução:</strong><br>
    1 m = 100 cm
    <br><br>

    <strong>Resposta:</strong><br>
    Existem 100 cm em 1 metro.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Unidades de Massa</h2>

  <div class="caixa-formula">
    kg → hg → dag → g → dg → cg → mg
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Quantos gramas há em 2 kg?
    <br><br>

    <strong>Resolução:</strong><br>
    2 kg = 2 × 1.000 g
    <br><br>

    <strong>Resposta:</strong><br>
    2 kg = 2.000 g
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Unidades de Capacidade</h2>

  <div class="caixa-formula">
    kL → hL → daL → L → dL → cL → mL
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Quantos mililitros há em 3 litros?
    <br><br>

    <strong>Resolução:</strong><br>
    1 L = 1.000 mL<br>
    3 L = 3.000 mL
    <br><br>

    <strong>Resposta:</strong><br>
    3 litros equivalem a 3.000 mL.
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Unidades de Tempo</h2>

  <div class="caixa-formula">
    1 minuto = 60 segundos<br>
    1 hora = 60 minutos<br>
    1 dia = 24 horas
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Quantos minutos há em 2 horas?
    <br><br>

    <strong>Resolução:</strong><br>
    2 × 60 = 120
    <br><br>

    <strong>Resposta:</strong><br>
    2 horas têm 120 minutos.
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Como Fazer Conversões</h2>

  <p>
    Para converter unidades no sistema métrico:
  </p>

  <div class="caixa-exemplo">
    • Andar para a direita → multiplicar por 10<br>
    • Andar para a esquerda → dividir por 10
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Converta 250 cm em metros.
    <br><br>

    <strong>Resolução:</strong><br>
    250 ÷ 100 = 2,5
    <br><br>

    <strong>Resposta:</strong><br>
    250 cm = 2,5 m
  </div>

  <div class="caixa-aviso">
    Cada "casinha" no sistema métrico vale 10.
  </div>
</section>
`
},
 "media": {
  titulo: "Média, Moda e Mediana",
  conteudo: `
<section>
  <h2>1️⃣ O que são Média, Moda e Mediana?</h2>

  <p>
    Média, moda e mediana são
    <strong>medidas de tendência central</strong>,
    usadas para analisar conjuntos de dados numéricos.
  </p>

  <div class="caixa-exemplo">
    Elas ajudam a entender qual valor
    representa melhor um conjunto de números.
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Média Aritmética</h2>

  <p>
    A média é calculada somando todos os valores
    e dividindo pela quantidade de elementos.
  </p>

  <div class="caixa-formula">
    Média = (soma dos valores) ÷ (quantidade de valores)
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule a média das notas: 6, 8 e 10.
    <br><br>

    <strong>Resolução:</strong><br>
    (6 + 8 + 10) ÷ 3 = 24 ÷ 3
    <br><br>

    <strong>Resposta:</strong><br>
    A média é 8.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Moda</h2>

  <p>
    A moda é o valor que
    <strong>mais se repete</strong>
    em um conjunto de dados.
  </p>

  <div class="caixa-formula">
    Moda = valor mais frequente
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Encontre a moda do conjunto: 2, 4, 4, 6, 8.
    <br><br>

    <strong>Resolução:</strong><br>
    O número 4 aparece mais vezes.
    <br><br>

    <strong>Resposta:</strong><br>
    A moda é 4.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Mediana</h2>

  <p>
    A mediana é o
    <strong>valor central</strong>
    de um conjunto de dados
    organizado em ordem crescente.
  </p>

  <div class="caixa-formula">
    Mediana = valor do meio
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Determine a mediana dos números: 1, 3, 5, 7, 9.
    <br><br>

    <strong>Resolução:</strong><br>
    O número do meio é 5.
    <br><br>

    <strong>Resposta:</strong><br>
    A mediana é 5.
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Mediana com Quantidade Par</h2>

  <p>
    Quando o conjunto tem
    <strong>quantidade par de elementos</strong>,
    a mediana é a média dos dois valores centrais.
  </p>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Encontre a mediana do conjunto: 2, 4, 6, 8.
    <br><br>

    <strong>Resolução:</strong><br>
    (4 + 6) ÷ 2 = 5
    <br><br>

    <strong>Resposta:</strong><br>
    A mediana é 5.
  </div>

  <div class="caixa-aviso">
    Sempre organize os números em ordem crescente antes de calcular a mediana.
  </div>
</section>
`
},
 "interpretacao": {
  titulo: "Interpretação de Gráficos e Tabelas",
  conteudo: `
<section>
  <h2>1️⃣ O que são Gráficos e Tabelas?</h2>

  <p>
    Gráficos e tabelas são formas de
    <strong>organizar e apresentar dados</strong>
    para facilitar a leitura e a interpretação das informações.
  </p>

  <div class="caixa-exemplo">
    Eles ajudam a comparar valores,
    identificar aumentos, diminuições e tendências.
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Tabelas</h2>

  <p>
    A tabela organiza dados em
    <strong>linhas e colunas</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo de tabela:</strong><br><br>

    Alunos | Notas<br>
    João | 7<br>
    Maria | 9<br>
    Ana | 8
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Qual aluno obteve a maior nota?
    <br><br>

    <strong>Resolução:</strong><br>
    Comparando as notas: 7, 9 e 8,
    a maior é 9.
    <br><br>

    <strong>Resposta:</strong><br>
    Maria obteve a maior nota.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Gráfico de Barras</h2>

  <p>
    O gráfico de barras é usado para
    <strong>comparar quantidades</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Quantidade de livros lidos em um mês:
    <br>
    Janeiro: 3<br>
    Fevereiro: 5<br>
    Março: 2
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em qual mês foram lidos mais livros?
    <br><br>

    <strong>Resolução:</strong><br>
    Fevereiro tem a maior barra (5 livros).
    <br><br>

    <strong>Resposta:</strong><br>
    Fevereiro foi o mês com mais livros lidos.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Gráfico de Linhas</h2>

  <p>
    O gráfico de linhas mostra a
    <strong>variação de dados ao longo do tempo</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Temperatura ao longo do dia:
    <br>
    Manhã: 18°C<br>
    Tarde: 28°C<br>
    Noite: 22°C
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em qual período a temperatura foi maior?
    <br><br>

    <strong>Resposta:</strong><br>
    À tarde, com 28°C.
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Gráfico de Setores (Pizza)</h2>

  <p>
    O gráfico de setores representa
    <strong>partes de um todo</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Distribuição do tempo diário:
    <br>
    Estudo: 40%<br>
    Lazer: 35%<br>
    Sono: 25%
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Qual atividade ocupa a maior parte do tempo?
    <br><br>

    <strong>Resposta:</strong><br>
    O estudo, com 40%.
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Dicas Importantes de Interpretação</h2>

  <ul>
    <li>Leia sempre o <strong>título</strong> do gráfico ou tabela</li>
    <li>Observe os <strong>eixos</strong> e as unidades de medida</li>
    <li>Compare valores antes de responder</li>
    <li>Cuidado com escalas diferentes</li>
  </ul>

  <div class="caixa-aviso">
    Um gráfico bem interpretado evita erros na resposta.
  </div>
</section>
`
},
 "probabilidade": {
  titulo: "Probabilidade Simples e Composta",
  conteudo: `
<section>
  <h2>1️⃣ O que é Probabilidade?</h2>

  <p>
    Probabilidade é a <strong>chance de um evento acontecer</strong>.
    Ela sempre é representada por um número entre <strong>0 e 1</strong>
    ou em forma de <strong>fração</strong>, <strong>decimal</strong> ou <strong>porcentagem</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula da Probabilidade</strong><br>
    P = número de casos favoráveis / número de casos possíveis
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Probabilidade Simples</h2>

  <p>
    A probabilidade simples ocorre quando analisamos
    <strong>apenas um evento</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Ao lançar um dado comum de 6 faces,
    qual a probabilidade de sair o número 4?
    <br><br>

    <strong>Resolução:</strong><br>
    Casos possíveis: 6 (1, 2, 3, 4, 5, 6)<br>
    Casos favoráveis: 1 (apenas o número 4)<br><br>

    P = 1 / 6
    <br><br>

    <strong>Resposta:</strong><br>
    A probabilidade é <strong>1/6</strong>.
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em uma caixa com 10 bolas,
    sendo 4 vermelhas e 6 azuis,
    qual a probabilidade de retirar uma bola vermelha?
    <br><br>

    <strong>Resolução:</strong><br>
    Casos favoráveis: 4<br>
    Casos possíveis: 10<br><br>

    P = 4 / 10 = 2 / 5
    <br><br>

    <strong>Resposta:</strong><br>
    A probabilidade é <strong>2/5</strong>.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Probabilidade Composta</h2>

  <p>
    A probabilidade composta ocorre quando
    <strong>dois ou mais eventos acontecem juntos</strong>.
  </p>

  <p>
    Nesses casos, multiplicamos as probabilidades
    de cada evento.
  </p>

  <div class="caixa-formula">
    <strong>Probabilidade Composta</strong><br>
    P = P₁ × P₂ × P₃ ...
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Qual a probabilidade de, ao lançar uma moeda duas vezes,
    sair <strong>cara nas duas jogadas</strong>?
    <br><br>

    <strong>Resolução:</strong><br>
    Probabilidade de cara em uma jogada = 1/2<br><br>

    P = 1/2 × 1/2<br>
    P = 1/4
    <br><br>

    <strong>Resposta:</strong><br>
    A probabilidade é <strong>1/4</strong>.
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Uma urna possui 5 bolas brancas e 3 pretas.
    Duas bolas são retiradas <strong>uma após a outra, sem reposição</strong>.
    Qual a probabilidade de sair duas bolas brancas?
    <br><br>

    <strong>Resolução:</strong><br>
    Primeira bola branca: 5 / 8<br>
    Segunda bola branca: 4 / 7<br><br>

    P = 5/8 × 4/7<br>
    P = 20 / 56<br>
    P = 5 / 14
    <br><br>

    <strong>Resposta:</strong><br>
    A probabilidade é <strong>5/14</strong>.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Comparação Importante</h2>

  <ul>
    <li><strong>Probabilidade Simples:</strong> apenas um evento</li>
    <li><strong>Probabilidade Composta:</strong> dois ou mais eventos</li>
  </ul>

  <div class="caixa-aviso">
    Sempre identifique se o problema tem
    um evento ou vários antes de calcular.
  </div>
</section>
`
},
 "analise": {
  titulo: "Análise Combinatória",
  conteudo: `
<section>
  <h2>1️⃣ O que é Análise Combinatória?</h2>

  <p>
    Análise Combinatória é a parte da matemática que
    estuda <strong>quantas maneiras diferentes</strong>
    algo pode acontecer.
  </p>

  <p>
    Ela responde perguntas do tipo:
    <em>“De quantas formas isso pode ser feito?”</em>
  </p>
</section>

<hr>

<section>
  <h2>2️⃣ Princípio Fundamental da Contagem</h2>

  <p>
    Quando uma tarefa é feita em <strong>etapas</strong>,
    multiplicamos a quantidade de opções de cada etapa.
  </p>

  <div class="caixa-formula">
    <strong>Princípio Fundamental</strong><br>
    Total = n₁ × n₂ × n₃ × ...
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Uma pessoa tem 3 camisetas e 2 calças.
    Quantos looks diferentes ela pode montar?
    <br><br>

    <strong>Resolução:</strong><br>
    3 opções de camisetas<br>
    2 opções de calças<br><br>

    Total = 3 × 2 = 6
    <br><br>

    <strong>Resposta:</strong><br>
    É possível montar 6 looks diferentes.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Permutação</h2>

  <p>
    Permutação acontece quando
    <strong>todos os elementos são usados</strong>
    e a <strong>ordem importa</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Permutação Simples</strong><br>
    Pₙ = n!
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    De quantas formas diferentes podemos organizar
    as letras A, B e C?
    <br><br>

    <strong>Resolução:</strong><br>
    Temos 3 letras<br><br>

    P₃ = 3!<br>
    P₃ = 3 × 2 × 1<br>
    P₃ = 6
    <br><br>

    <strong>Resposta:</strong><br>
    Existem 6 formas diferentes.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Arranjo</h2>

  <p>
    Arranjo ocorre quando
    <strong>escolhemos parte dos elementos</strong>
    e a <strong>ordem importa</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Arranjo Simples</strong><br>
    Aₙ,p = n! / (n − p)!
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em uma sala com 5 alunos,
    de quantas formas podemos escolher
    um presidente e um vice?
    <br><br>

    <strong>Resolução:</strong><br>
    Temos 5 opções para presidente<br>
    Depois, 4 opções para vice<br><br>

    Total = 5 × 4 = 20
    <br><br>

    <strong>Resposta:</strong><br>
    Existem 20 formas diferentes.
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Combinação</h2>

  <p>
    Combinação ocorre quando
    <strong>a ordem NÃO importa</strong>,
    apenas o grupo escolhido.
  </p>

  <div class="caixa-formula">
    <strong>Combinação Simples</strong><br>
    Cₙ,p = n! / [p! × (n − p)!]
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Em um grupo de 6 pessoas,
    quantos grupos diferentes de 2 pessoas
    podem ser formados?
    <br><br>

    <strong>Resolução:</strong><br>
    C₆,₂ = 6! / (2! × 4!)<br><br>

    C₆,₂ = (6 × 5) / (2 × 1)<br>
    C₆,₂ = 15
    <br><br>

    <strong>Resposta:</strong><br>
    Podem ser formados 15 grupos diferentes.
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Comparação Importante</h2>

  <ul>
    <li><strong>Permutação:</strong> usa todos e a ordem importa</li>
    <li><strong>Arranjo:</strong> usa parte e a ordem importa</li>
    <li><strong>Combinação:</strong> a ordem NÃO importa</li>
  </ul>

  <div class="caixa-aviso">
    Sempre pergunte: a ordem faz diferença?
    Essa pergunta resolve quase tudo!
  </div>
</section>
`
},
 "desvio": {
  titulo: "Variância e Desvio Padrão",
  conteudo: `
<section>
  <h2>1️⃣ Variância</h2>

  <p>
    A variância mostra <strong>o quanto os valores estão espalhados</strong>
    em relação à média.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula da Variância</strong><br>
    V = soma dos (valor − média)² / quantidade
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Valores: 2, 4 e 6
    <br><br>

    Média = (2 + 4 + 6) / 3 = 4
    <br><br>

    (2 − 4)² = 4<br>
    (4 − 4)² = 0<br>
    (6 − 4)² = 4
    <br><br>

    Variância = (4 + 0 + 4) / 3 = 8 / 3 ≈ 2,67
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Desvio Padrão</h2>

  <p>
    O desvio padrão é a <strong>raiz quadrada da variância</strong>.
    Ele indica, em média, quanto os valores se afastam da média.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula do Desvio Padrão</strong><br>
    DP = √Variância
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Usando a variância 2,67:
    <br><br>

    DP = √2,67 ≈ 1,63
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Comparando Conjuntos</h2>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Conjunto A: 5, 6, 7<br>
    Conjunto B: 1, 6, 11
    <br><br>

    <strong>Resolução:</strong><br>
    Ambos têm média 6.
    <br><br>

    Conjunto A → valores próximos → desvio padrão pequeno<br>
    Conjunto B → valores distantes → desvio padrão grande
    <br><br>

    <strong>Resposta:</strong><br>
    O conjunto B é mais disperso.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Interpretação do Resultado</h2>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Se a média de notas é 7 e o desvio padrão é 0,5,
    as notas estão bem próximas de 7.
    <br><br>

    Se o desvio padrão fosse 3,
    as notas estariam muito espalhadas.
  </div>

  <div class="caixa-aviso">
    Desvio padrão pequeno = dados próximos da média<br>
    Desvio padrão grande = dados espalhados
  </div>
</section>
`
},
 "areas": {
  titulo: "Áreas de Figuras Planas",
  conteudo: `
<section>
  <h2>1️⃣ O que é Área?</h2>

  <p>
    Área é a <strong>medida da superfície</strong> de uma figura plana.
    Ela indica quanto espaço a figura ocupa.
  </p>

  <div class="caixa-aviso">
    A unidade de área sempre fica ao quadrado:
    cm², m², km², etc.
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Quadrado</h2>

  <p>
    O quadrado possui <strong>quatro lados iguais</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Área do Quadrado</strong><br>
    A = lado × lado
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Um quadrado tem lado 5 cm.
    <br><br>

    A = 5 × 5 = 25
    <br><br>

    <strong>Resposta:</strong><br>
    A área é 25 cm².
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Retângulo</h2>

  <p>
    O retângulo possui <strong>dois lados maiores e dois menores</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Área do Retângulo</strong><br>
    A = base × altura
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Um retângulo tem base 8 cm e altura 3 cm.
    <br><br>

    A = 8 × 3 = 24
    <br><br>

    <strong>Resposta:</strong><br>
    A área é 24 cm².
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Triângulo</h2>

  <p>
    O triângulo possui <strong>três lados</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Área do Triângulo</strong><br>
    A = (base × altura) ÷ 2
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Um triângulo tem base 10 cm e altura 6 cm.
    <br><br>

    A = (10 × 6) ÷ 2 = 30
    <br><br>

    <strong>Resposta:</strong><br>
    A área é 30 cm².
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Paralelogramo</h2>

  <p>
    O paralelogramo é parecido com o retângulo,
    mas possui lados inclinados.
  </p>

  <div class="caixa-formula">
    <strong>Área do Paralelogramo</strong><br>
    A = base × altura
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Base = 7 cm e altura = 4 cm.
    <br><br>

    A = 7 × 4 = 28
    <br><br>

    <strong>Resposta:</strong><br>
    A área é 28 cm².
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Trapézio</h2>

  <p>
    O trapézio possui <strong>duas bases paralelas</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Área do Trapézio</strong><br>
    A = (base maior + base menor) × altura ÷ 2
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Base maior = 10 cm<br>
    Base menor = 6 cm<br>
    Altura = 4 cm
    <br><br>

    A = (10 + 6) × 4 ÷ 2<br>
    A = 32
    <br><br>

    <strong>Resposta:</strong><br>
    A área é 32 cm².
  </div>
</section>

<hr>

<section>
  <h2>7️⃣ Círculo</h2>

  <p>
    O círculo é uma figura redonda.
  </p>

  <div class="caixa-formula">
    <strong>Área do Círculo</strong><br>
    A = π × r²
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Um círculo tem raio 5 cm.
    <br><br>

    A = 3,14 × 5²<br>
    A = 3,14 × 25 = 78,5
    <br><br>

    <strong>Resposta:</strong><br>
    A área é 78,5 cm².
  </div>
</section>

<hr>

<section>
  <h2>8️⃣ Resumo das Fórmulas</h2>

  <ul>
    <li><strong>Quadrado:</strong> A = lado²</li>
    <li><strong>Retângulo:</strong> A = base × altura</li>
    <li><strong>Triângulo:</strong> A = (base × altura) ÷ 2</li>
    <li><strong>Paralelogramo:</strong> A = base × altura</li>
    <li><strong>Trapézio:</strong> A = (B + b) × h ÷ 2</li>
    <li><strong>Círculo:</strong> A = π × r²</li>
  </ul>
</section>
`
},
"pitagoras": {
  titulo: "Triângulos e Teorema de Pitágoras",
  conteudo: `
<section>
  <h2>1️⃣ O que é um Triângulo?</h2>

  <p>
    Triângulo é uma figura plana formada por
    <strong>três lados e três ângulos</strong>.
  </p>
</section>

<hr>

<section>
  <h2>2️⃣ Classificação dos Triângulos (pelos lados)</h2>

  <ul>
    <li><strong>Equilátero:</strong> três lados iguais</li>
    <li><strong>Isósceles:</strong> dois lados iguais</li>
    <li><strong>Escaleno:</strong> três lados diferentes</li>
  </ul>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Um triângulo com lados 5 cm, 5 cm e 5 cm é equilátero.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Classificação dos Triângulos (pelos ângulos)</h2>

  <ul>
    <li><strong>Acutângulo:</strong> todos os ângulos menores que 90°</li>
    <li><strong>Retângulo:</strong> possui um ângulo de 90°</li>
    <li><strong>Obtusângulo:</strong> possui um ângulo maior que 90°</li>
  </ul>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    Um triângulo com um ângulo de 90° é um triângulo retângulo.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Teorema de Pitágoras</h2>

  <p>
    O Teorema de Pitágoras é usado
    <strong>somente em triângulos retângulos</strong>.
  </p>

  <p>
    Ele relaciona os comprimentos dos lados do triângulo.
  </p>

  <div class="caixa-formula">
    <strong>Teorema de Pitágoras</strong><br>
    hipotenusa² = cateto¹² + cateto²²
  </div>

  <p>
    A <strong>hipotenusa</strong> é o maior lado,
    oposto ao ângulo de 90°.
  </p>
</section>

<hr>

<section>
  <h2>5️⃣ Exemplo Prático</h2>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Um triângulo retângulo tem catetos de 6 cm e 8 cm.
    Qual é o valor da hipotenusa?
    <br><br>

    <strong>Resolução:</strong><br>
    h² = 6² + 8²<br>
    h² = 36 + 64<br>
    h² = 100<br>
    h = √100<br>
    h = 10
    <br><br>

    <strong>Resposta:</strong><br>
    A hipotenusa mede 10 cm.
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Outro Exemplo</h2>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Um triângulo retângulo tem hipotenusa 13 cm
    e um cateto 5 cm.
    Qual é o outro cateto?
    <br><br>

    <strong>Resolução:</strong><br>
    h² = a² + b²<br>
    13² = 5² + x²<br>
    169 = 25 + x²<br>
    x² = 144<br>
    x = 12
    <br><br>

    <strong>Resposta:</strong><br>
    O outro cateto mede 12 cm.
  </div>
</section>

<hr>

<section>
  <h2>7️⃣ Resumo Importante</h2>

  <ul>
    <li>O Teorema de Pitágoras só vale para triângulos retângulos</li>
    <li>A hipotenusa é sempre o maior lado</li>
    <li>Catetos formam o ângulo de 90°</li>
  </ul>

  <div class="caixa-aviso">
    Se o triângulo não for retângulo,
    não pode usar o Teorema de Pitágoras.
  </div>
</section>
`
},
 "circulos": {
  titulo: "Círculos e Circunferências",
  conteudo: `
<section>
  <h2>1️⃣ Diferença entre Círculo e Circunferência</h2>

  <p>
    <strong>Circunferência</strong> é a <strong>linha</strong> que contorna a figura.
  </p>

  <p>
    <strong>Círculo</strong> é a <strong>região interna</strong> limitada pela circunferência.
  </p>

  <div class="caixa-exemplo">
    • Circunferência → só a borda<br>
    • Círculo → tudo que está dentro da borda
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Elementos do Círculo</h2>

  <ul>
    <li><strong>Centro:</strong> ponto central</li>
    <li><strong>Raio (r):</strong> distância do centro até a borda</li>
    <li><strong>Diâmetro (d):</strong> passa pelo centro (d = 2r)</li>
  </ul>

  <div class="caixa-exemplo">
    Se o raio é 5 cm, o diâmetro é 10 cm.
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Comprimento da Circunferência</h2>

  <p>
    É o <strong>tamanho da borda</strong> do círculo.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula</strong><br>
    C = 2 · π · r
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 1:</strong><br>
    Raio = 7 cm<br><br>

    C = 2 · 3,14 · 7<br>
    C ≈ 43,96 cm
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 2:</strong><br>
    Diâmetro = 10 cm<br><br>

    r = 5 cm<br>
    C = 2 · 3,14 · 5 = 31,4 cm
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Área do Círculo</h2>

  <p>
    A área representa a <strong>região interna</strong> do círculo.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula</strong><br>
    A = π · r²
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 1:</strong><br>
    Raio = 4 cm<br><br>

    A = 3,14 · 4²<br>
    A = 3,14 · 16<br>
    A = 50,24 cm²
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 2:</strong><br>
    Raio = 10 cm<br><br>

    A = 3,14 · 100<br>
    A = 314 cm²
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Dicas Importantes</h2>

  <ul>
    <li>π ≈ 3,14 (quando não indicado)</li>
    <li>Diâmetro sempre é o dobro do raio</li>
    <li>Área usa unidade ao quadrado (cm², m²)</li>
    <li>Comprimento usa unidade simples (cm, m)</li>
  </ul>

  <div class="caixa-aviso">
    Cuidado para não confundir
    área do círculo com comprimento da circunferência.
  </div>
</section>
`
},
 "volumes1": {
  titulo: "Volumes: Prismas e Cilindros",
  conteudo: `
<section>
  <h2>1️⃣ O que é Volume?</h2>

  <p>
    Volume é a <strong>quantidade de espaço ocupada</strong> por um sólido.
  </p>

  <p>
    Normalmente é medido em <strong>cm³, m³ ou litros</strong>.
  </p>
</section>

<hr>

<section>
  <h2>2️⃣ Volume dos Prismas</h2>

  <p>
    Um prisma é um sólido que possui
    <strong>duas bases iguais e paralelas</strong>
    e faces laterais retangulares.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula do Volume do Prisma</strong><br>
    V = Área da base × altura
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 1:</strong><br>
    Um prisma tem base com área de 20 cm²
    e altura de 5 cm.
    <br><br>

    V = 20 × 5<br>
    V = 100 cm³
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 2:</strong><br>
    Um prisma retangular mede
    4 cm × 3 cm × 10 cm.
    <br><br>

    Área da base = 4 × 3 = 12 cm²<br>
    V = 12 × 10 = 120 cm³
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Volume do Cilindro</h2>

  <p>
    O cilindro é um sólido que possui
    <strong>duas bases circulares</strong>
    e uma superfície lateral curva.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula do Volume do Cilindro</strong><br>
    V = π · r² · h
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 1:</strong><br>
    Um cilindro tem raio de 3 cm
    e altura de 10 cm.
    <br><br>

    V = 3,14 · 3² · 10<br>
    V = 3,14 · 9 · 10<br>
    V = 282,6 cm³
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 2:</strong><br>
    Um cilindro tem diâmetro de 8 cm
    e altura de 5 cm.
    <br><br>

    r = 4 cm<br>
    V = 3,14 · 4² · 5<br>
    V = 3,14 · 16 · 5<br>
    V = 251,2 cm³
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Comparação Importante</h2>

  <ul>
    <li><strong>Prisma:</strong> base pode ser qualquer polígono</li>
    <li><strong>Cilindro:</strong> base é sempre um círculo</li>
    <li>Ambos usam: <strong>volume = área da base × altura</strong></li>
  </ul>

  <div class="caixa-aviso">
    Atenção às unidades:
    volume sempre fica ao cubo (cm³, m³).
  </div>
</section>
`
},
 "volumes2": {
  titulo: "Volumes: Pirâmides e Cones",
  conteudo: `
<section>
  <h2>1️⃣ Volume das Pirâmides</h2>

  <p>
    A pirâmide é um sólido que possui
    <strong>uma base</strong> e
    <strong>faces laterais triangulares</strong>
    que se encontram em um único ponto (vértice).
  </p>

  <div class="caixa-formula">
    <strong>Fórmula do Volume da Pirâmide</strong><br>
    V = (Área da base × altura) ÷ 3
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 1:</strong><br>
    Uma pirâmide tem base com área de 30 cm²
    e altura de 9 cm.
    <br><br>

    V = (30 × 9) ÷ 3<br>
    V = 270 ÷ 3<br>
    V = 90 cm³
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 2:</strong><br>
    A base de uma pirâmide quadrada mede
    4 cm de lado e a altura é 6 cm.
    <br><br>

    Área da base = 4 × 4 = 16 cm²<br>
    V = (16 × 6) ÷ 3<br>
    V = 96 ÷ 3 = 32 cm³
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Volume dos Cones</h2>

  <p>
    O cone é um sólido que possui
    <strong>base circular</strong>
    e uma superfície lateral curva
    que se encontra em um vértice.
  </p>

  <div class="caixa-formula">
    <strong>Fórmula do Volume do Cone</strong><br>
    V = (π · r² · h) ÷ 3
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 1:</strong><br>
    Um cone tem raio de 3 cm
    e altura de 12 cm.
    <br><br>

    V = (3,14 · 3² · 12) ÷ 3<br>
    V = (3,14 · 9 · 12) ÷ 3<br>
    V = 339,12 ÷ 3<br>
    V = 113,04 cm³
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 2:</strong><br>
    Um cone tem diâmetro de 10 cm
    e altura de 6 cm.
    <br><br>

    r = 5 cm<br>
    V = (3,14 · 5² · 6) ÷ 3<br>
    V = (3,14 · 25 · 6) ÷ 3<br>
    V = 471 ÷ 3 = 157 cm³
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Comparação Importante</h2>

  <ul>
    <li><strong>Pirâmide:</strong> base pode ser qualquer polígono</li>
    <li><strong>Cone:</strong> base é sempre um círculo</li>
    <li>Ambos têm volume igual a <strong>1/3</strong> do prisma ou cilindro correspondente</li>
  </ul>

  <div class="caixa-aviso">
    Cuidado para não esquecer de dividir por 3!
    Esse é o erro mais comum em provas.
  </div>
</section>
`
},
 "funcao1": {
  titulo: "Função de 1º Grau (Função Afim)",
  conteudo: `
<section>
  <h2>1️⃣ O que é Função de 1º Grau?</h2>

  <p>
    Uma função de 1º grau é uma função matemática usada
    para representar situações onde uma quantidade
    <strong>aumenta ou diminui de forma constante</strong>.
  </p>

  <p>
    Ela recebe esse nome porque o maior expoente da variável
    é <strong>1</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Forma Geral da Função Afim</strong><br>
    f(x) = ax + b
  </div>

  <ul>
    <li><strong>a</strong> → coeficiente angular (inclinação da reta)</li>
    <li><strong>b</strong> → coeficiente linear (onde a reta corta o eixo y)</li>
    <li><strong>x</strong> → variável independente</li>
  </ul>
</section>

<hr>

<section>
  <h2>2️⃣ Coeficiente Angular (a)</h2>

  <p>
    O valor de <strong>a</strong> indica se a função cresce ou decresce.
  </p>

  <ul>
    <li><strong>a &gt; 0</strong> → função crescente</li>
    <li><strong>a &lt; 0</strong> → função decrescente</li>
    <li><strong>a = 0</strong> → função constante</li>
  </ul>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = 2x + 1 → a = 2 (função crescente)<br>
    f(x) = -3x + 5 → a = -3 (função decrescente)
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Coeficiente Linear (b)</h2>

  <p>
    O coeficiente <strong>b</strong> indica o valor da função
    quando <strong>x = 0</strong>.
  </p>

  <div class="caixa-formula">
    f(0) = b
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = 4x - 7<br>
    f(0) = -7 → a reta corta o eixo y em -7
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Raiz da Função (Zero da Função)</h2>

  <p>
    A raiz da função é o valor de <strong>x</strong>
    para o qual <strong>f(x) = 0</strong>.
  </p>

  <div class="caixa-formula">
    ax + b = 0<br>
    x = -b ÷ a
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = 2x - 6<br>
    2x - 6 = 0<br>
    2x = 6<br>
    x = 3
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Exemplos de Perguntas Resolvidas</h2>

  <div class="caixa-exemplo">
    <strong>Pergunta 1:</strong><br>
    Dada a função f(x) = 3x + 2, calcule f(4).
    <br><br>

    f(4) = 3 · 4 + 2<br>
    f(4) = 12 + 2 = 14
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta 2:</strong><br>
    Qual é a raiz da função f(x) = -x + 5?
    <br><br>

    -x + 5 = 0<br>
    -x = -5<br>
    x = 5
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta 3:</strong><br>
    Uma corrida de aplicativo cobra
    R$ 5,00 de taxa fixa mais R$ 2,00 por km.
    Qual a função que representa o valor pago?
    <br><br>

    f(x) = 2x + 5
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Gráfico da Função de 1º Grau</h2>

  <p>
    O gráfico de uma função de 1º grau
    é sempre uma <strong>reta</strong>.
  </p>

  <p>
    Para desenhar o gráfico, basta
    encontrar <strong>dois pontos</strong>.
  </p>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = x + 1
    <br><br>

    Quando x = 0 → y = 1<br>
    Quando x = 2 → y = 3<br>
    Pontos: (0,1) e (2,3)
  </div>
</section>
`
},
 "funcao2": {
  titulo: "Função de 2º Grau (Função Quadrática)",
  conteudo: `
<section>
  <h2>1️⃣ O que é uma Função de 2º Grau?</h2>

  <p>
    A função de 2º grau é uma função matemática usada
    para representar situações em que o valor
    <strong>aumenta e depois diminui</strong> (ou o contrário),
    formando uma curva.
  </p>

  <p>
    Ela recebe esse nome porque o maior expoente da variável
    é <strong>2</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Forma Geral</strong><br>
    f(x) = ax² + bx + c
  </div>

  <ul>
    <li><strong>a</strong> ≠ 0 → determina o formato da curva</li>
    <li><strong>b</strong> → influencia a inclinação inicial</li>
    <li><strong>c</strong> → ponto onde o gráfico corta o eixo y</li>
  </ul>
</section>

<hr>

<section>
  <h2>2️⃣ Concavidade da Parábola</h2>

  <p>
    O gráfico da função de 2º grau é chamado de
    <strong>parábola</strong>.
  </p>

  <p>
    O valor de <strong>a</strong> indica a direção da parábola.
  </p>

  <ul>
    <li><strong>a &gt; 0</strong> → parábola aberta para cima (∪)</li>
    <li><strong>a &lt; 0</strong> → parábola aberta para baixo (∩)</li>
  </ul>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = x² − 4 → abre para cima<br>
    f(x) = −2x² + 3x → abre para baixo
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Coeficiente c (Intercepto em y)</h2>

  <p>
    O coeficiente <strong>c</strong> representa o valor da função
    quando <strong>x = 0</strong>.
  </p>

  <div class="caixa-formula">
    f(0) = c
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = x² − 3x + 5<br>
    f(0) = 5 → a parábola corta o eixo y em 5
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Raízes da Função (Zeros)</h2>

  <p>
    As raízes da função são os valores de <strong>x</strong>
    para os quais <strong>f(x) = 0</strong>.
  </p>

  <div class="caixa-formula">
    ax² + bx + c = 0
  </div>

  <p>
    Para encontrar as raízes, usamos a
    <strong>Fórmula de Bhaskara</strong>.
  </p>

  <div class="caixa-formula">
    x = (−b ± √Δ) ÷ 2a<br><br>
    Δ = b² − 4ac
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = x² − 5x + 6<br><br>

    a = 1, b = −5, c = 6<br>
    Δ = (−5)² − 4·1·6<br>
    Δ = 25 − 24 = 1<br><br>

    x = (5 ± 1) ÷ 2<br>
    x₁ = 3<br>
    x₂ = 2
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Número de Raízes</h2>

  <ul>
    <li><strong>Δ &gt; 0</strong> → duas raízes reais diferentes</li>
    <li><strong>Δ = 0</strong> → uma raiz real (raiz dupla)</li>
    <li><strong>Δ &lt; 0</strong> → não existem raízes reais</li>
  </ul>
</section>

<hr>

<section>
  <h2>6️⃣ Vértice da Parábola</h2>

  <p>
    O vértice é o ponto <strong>mais alto</strong> ou
    <strong>mais baixo</strong> da parábola.
  </p>

  <div class="caixa-formula">
    xᵥ = −b ÷ 2a<br>
    yᵥ = −Δ ÷ 4a
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = x² − 4x + 3<br><br>

    a = 1, b = −4, c = 3<br>
    xᵥ = 4 ÷ 2 = 2<br>
    yᵥ = −4 ÷ 4 = −1<br><br>

    Vértice: (2, −1)
  </div>
</section>

<hr>

<section>
  <h2>7️⃣ Exemplos do Cotidiano</h2>

  <div class="caixa-exemplo">
    <strong>Exemplo 1:</strong><br>
    A altura de uma bola lançada para cima
    é dada por:<br>
    h(t) = −5t² + 20t + 1
    <br><br>

    O sinal negativo indica que a bola
    sobe e depois cai.
  </div>

  <div class="caixa-exemplo">
    <strong>Exemplo 2:</strong><br>
    Lucro de uma empresa:<br>
    L(x) = −2x² + 40x − 100
    <br><br>

    Existe um ponto de lucro máximo,
    que ocorre no vértice da função.
  </div>
</section>

<hr>

<section>
  <h2>8️⃣ Gráfico da Função Quadrática</h2>

  <p>
    O gráfico da função de 2º grau é uma
    <strong>parábola</strong>.
  </p>

  <p>
    Para desenhar o gráfico, usamos:
  </p>

  <ul>
    <li>Concavidade (valor de a)</li>
    <li>Intercepto em y (valor de c)</li>
    <li>Raízes (se existirem)</li>
    <li>Vértice</li>
  </ul>
</section>
`
},
 "logaritmos": {
  titulo: "Logaritmos e Funções Exponenciais",
  conteudo: `
<section>
  <h2>1️⃣ Função Exponencial</h2>

  <p>
    A função exponencial é aquela em que a variável
    aparece no <strong>expoente</strong>.
  </p>

  <p>
    Ela é muito usada para representar
    <strong>crescimento</strong> ou <strong>decrescimento rápido</strong>,
    como população, juros e bactérias.
  </p>

  <div class="caixa-formula">
    <strong>Forma Geral</strong><br>
    f(x) = a · bˣ
  </div>

  <ul>
    <li><strong>a</strong> &gt; 0 → valor inicial</li>
    <li><strong>b</strong> &gt; 0 e b ≠ 1 → base da potência</li>
  </ul>
</section>

<hr>

<section>
  <h2>2️⃣ Crescimento e Decrescimento Exponencial</h2>

  <p>
    O valor da base <strong>b</strong> determina o comportamento
    da função.
  </p>

  <ul>
    <li><strong>b &gt; 1</strong> → crescimento exponencial</li>
    <li><strong>0 &lt; b &lt; 1</strong> → decrescimento exponencial</li>
  </ul>

  <div class="caixa-exemplo">
    <strong>Exemplo:</strong><br>
    f(x) = 2ˣ → cresce rapidamente<br>
    f(x) = (1/2)ˣ → diminui com o tempo
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Propriedades das Potências</h2>

  <ul>
    <li>b⁰ = 1</li>
    <li>b¹ = b</li>
    <li>bᵐ · bⁿ = bᵐ⁺ⁿ</li>
    <li>bᵐ ÷ bⁿ = bᵐ⁻ⁿ</li>
    <li>(bᵐ)ⁿ = bᵐⁿ</li>
  </ul>
</section>

<hr>

<section>
  <h2>4️⃣ O que é Logaritmo?</h2>

  <p>
    Logaritmo é a operação <strong>inversa da exponenciação</strong>.
  </p>

  <p>
    Ele responde à pergunta:
    <strong>“Qual expoente devo usar para chegar a esse número?”</strong>
  </p>

  <div class="caixa-formula">
    <strong>Definição</strong><br>
    logₐ b = x ⇔ aˣ = b
  </div>

  <ul>
    <li>a &gt; 0 e a ≠ 1</li>
    <li>b &gt; 0</li>
  </ul>
</section>

<hr>

<section>
  <h2>5️⃣ Logaritmos Mais Usados</h2>

  <ul>
    <li><strong>Logaritmo decimal:</strong> base 10 → log b</li>
    <li><strong>Logaritmo natural:</strong> base e → ln b</li>
  </ul>
</section>

<hr>

<section>
  <h2>6️⃣ Propriedades dos Logaritmos</h2>

  <div class="caixa-formula">
    logₐ (M · N) = logₐ M + logₐ N<br>
    logₐ (M ÷ N) = logₐ M − logₐ N<br>
    logₐ Mⁿ = n · logₐ M
  </div>
</section>

<hr>

<section>
  <h2>7️⃣ Exemplos Resolvidos</h2>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule log₂ 8.
    <br><br>

    <strong>Resolução:</strong><br>
    2ˣ = 8<br>
    2³ = 8<br>
    x = 3
    <br><br>

    <strong>Resposta:</strong><br>
    log₂ 8 = 3
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule log 100.
    <br><br>

    <strong>Resolução:</strong><br>
    10ˣ = 100<br>
    10² = 100<br>
    x = 2
    <br><br>

    <strong>Resposta:</strong><br>
    log 100 = 2
  </div>
</section>

<hr>

<section>
  <h2>8️⃣ Relação entre Exponencial e Logaritmo</h2>

  <p>
    Funções exponenciais e logarítmicas são
    <strong>inversas entre si</strong>.
  </p>

  <p>
    Se uma função cresce rápido,
    a outra cresce lentamente.
  </p>

  <div class="caixa-exemplo">
    f(x) = 2ˣ<br>
    f⁻¹(x) = log₂ x
  </div>
</section>

<hr>

<section>
  <h2>9️⃣ Aplicações Práticas</h2>

  <ul>
    <li>Crescimento populacional</li>
    <li>Juros compostos</li>
    <li>Escala Richter (terremotos)</li>
    <li>pH (química)</li>
  </ul>
</section>
`
},
 "papg": {
  titulo: "Progressão Aritmética (PA) e Progressão Geométrica (PG)",
  conteudo: `
<section>
  <h2>1️⃣ Progressão Aritmética (PA)</h2>

  <p>
    Uma Progressão Aritmética é uma sequência de números
    em que a <strong>diferença entre termos consecutivos é constante</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Razão da PA</strong><br>
    r = a₂ − a₁
  </div>

  <div class="caixa-formula">
    <strong>Termo Geral da PA</strong><br>
    aₙ = a₁ + (n − 1) · r
  </div>
</section>

<hr>

<section>
  <h2>2️⃣ Tipos de PA</h2>

  <ul>
    <li><strong>PA crescente:</strong> r &gt; 0</li>
    <li><strong>PA decrescente:</strong> r &lt; 0</li>
    <li><strong>PA constante:</strong> r = 0</li>
  </ul>

  <div class="caixa-exemplo">
    Exemplo de PA:<br>
    2, 5, 8, 11, 14...
  </div>
</section>

<hr>

<section>
  <h2>3️⃣ Soma dos Termos da PA</h2>

  <div class="caixa-formula">
    <strong>Soma dos n termos</strong><br>
    Sₙ = (n · (a₁ + aₙ)) / 2
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule a soma dos 10 primeiros termos da PA:
    2, 4, 6, ...
    <br><br>

    <strong>Resolução:</strong><br>
    a₁ = 2<br>
    r = 2<br>
    a₁₀ = 2 + 9 · 2 = 20<br><br>

    S₁₀ = (10 · (2 + 20)) / 2<br>
    S₁₀ = 110
    <br><br>

    <strong>Resposta:</strong><br>
    A soma é 110.
  </div>
</section>

<hr>

<section>
  <h2>4️⃣ Progressão Geométrica (PG)</h2>

  <p>
    Uma Progressão Geométrica é uma sequência de números
    em que cada termo é obtido multiplicando o anterior
    por uma <strong>razão constante</strong>.
  </p>

  <div class="caixa-formula">
    <strong>Razão da PG</strong><br>
    q = a₂ ÷ a₁
  </div>

  <div class="caixa-formula">
    <strong>Termo Geral da PG</strong><br>
    aₙ = a₁ · qⁿ⁻¹
  </div>
</section>

<hr>

<section>
  <h2>5️⃣ Tipos de PG</h2>

  <ul>
    <li><strong>PG crescente:</strong> q &gt; 1</li>
    <li><strong>PG decrescente:</strong> 0 &lt; q &lt; 1</li>
    <li><strong>PG constante:</strong> q = 1</li>
    <li><strong>PG alternante:</strong> q &lt; 0</li>
  </ul>

  <div class="caixa-exemplo">
    Exemplo de PG:<br>
    3, 6, 12, 24...
  </div>
</section>

<hr>

<section>
  <h2>6️⃣ Soma dos Termos da PG</h2>

  <div class="caixa-formula">
    <strong>Soma dos n termos (q ≠ 1)</strong><br>
    Sₙ = a₁ · (qⁿ − 1) / (q − 1)
  </div>

  <div class="caixa-exemplo">
    <strong>Pergunta:</strong><br>
    Calcule a soma dos 5 primeiros termos da PG:
    2, 4, 8, 16, ...
    <br><br>

    <strong>Resolução:</strong><br>
    a₁ = 2<br>
    q = 2<br>
    n = 5<br><br>

    S₅ = 2 · (2⁵ − 1) / (2 − 1)<br>
    S₅ = 2 · (32 − 1)<br>
    S₅ = 62
    <br><br>

    <strong>Resposta:</strong><br>
    A soma é 62.
  </div>
</section>

<hr>

<section>
  <h2>7️⃣ Comparação PA × PG</h2>

  <ul>
    <li><strong>PA:</strong> soma ou subtrai a razão</li>
    <li><strong>PG:</strong> multiplica ou divide pela razão</li>
  </ul>

  <div class="caixa-aviso">
    PA cresce de forma linear,
    PG cresce de forma muito mais rápida.
  </div>
</section>
`
},
 

};
