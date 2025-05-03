document.addEventListener('DOMContentLoaded', function() {
    const listaDeFilmes = document.getElementById('listaDeFilmes');
    const detalhesFilmeDiv = document.getElementById('detalhesFilme');
    const filmesInfo = {
        'anora': {
            tituloOriginal: 'Anora',
            sinopse: '(Não recomendado para menos de 16 anos)\nEm Anora, longa dirigido e escrito por Sean Baker, acompanhamos a jovem Anora (Mikey Madison), uma trabalhadora do sexo da região do Brooklyn, nos Estados Unidos. Em uma noite aparentemente normal de mais um dia de trabalho, a garota descobre que pode ter tirado a sorte grande, uma oportunidade de mudar seu destino: ela acredita ter encontrado o seu verdadeiro amor após se casar impulsivamente com o filho de um oligarca, o herdeiro russo Ivan (Mark Eidelshtein). Não demora muito para que a notícia se espalhe pela Rússia e logo o seu conto de fadas é ameaçado quando os pais de Ivan entram em cena, desaprovando totalmente o casamento. A história que ambos construíram é ameaçada e os dois decidem em comum acordo por findar o casamento. Mas será que para sempre?',
            duracao: '2h 19min',
            genero: 'Comédia dramática',
            direcao: 'Sean Baker',
            roteiro: 'Sean Baker',
            elenco: 'Mikey Madison, Mark Eydelshteyn, Yura Borisov'
        },
        'o-brutalista': {
            tituloOriginal: 'The Brutalist',
            sinopse: '(Não recomendado para menos de 18 anos)\nO Brutalista se passa em 1947, quando o arquiteto visionário húngaro László Toth (Adrien Brody) e sua esposa Erzsébet (Felicity Jones) fogem da Europa devastada pela guerra em busca de um novo começo na América. Em sua jornada para reconstruir seu legado e testemunhar o surgimento da América moderna, eles se deparam com uma oportunidade que pode mudar suas vidas para sempre. O industrial rico e carismático Harrison Van Buren (Guy Pearce) oferece a László um sonho americano em bandeja de prata: a chance de projetar um grandioso monumento modernista que moldará a paisagem do país que agora chamam de lar. Este projeto ambicioso representa o auge da carreira de László, prometendo levar ele e Erzsébet a novas alturas de sucesso e reconhecimento. No entanto, o caminho para a realização de seus sonhos é repleto de desafios e reveses inesperados, que os levarão a enfrentar tanto triunfos quanto tragédias ao longo de quase três décadas.',
            duracao: '3h 34min',
            genero: 'Drama',
            direcao: 'Brady Corbet',
            roteiro: 'Brady Corbet, Mona Fastvold',
            elenco: 'Adrien Brody, Felicity Jones, Guy Pearce'
        },
        'duna2': {
            tituloOriginal: 'Dune: Part Two',
            sinopse: '(Não recomendado para menos de 14 anos)\nEm Duna: Parte 2, Paul Atreides (Timothée Chalamet) se une a Chani (Zendaya) e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família. Uma jornada espiritual, mística e marcial se inicia. Para se tornar Muad\'Dib, enquanto tenta prevenir o futuro horrível, mas inevitável que ele testemunhou, Paul Atreides vê uma Guerra Santa em seu nome, espalhando-se por todo o universo conhecido. Enfrentando uma escolha entre o amor de sua vida e o destino do universo, Paul deve evitar um futuro terrível que só ele pode prever. Se tudo sair como planejado, ele poderá guiar a humanidade para um futuro promissor.',
            duracao: '2h 46min',
            genero: 'Drama, Ficção Cientíica',
            direcao: 'Denis Villeneuve',
            roteiro: 'Denis Villeneuve, Jon Spaihts',
            elenco: 'Timothée Chalamet, Zendaya, Rebecca Ferguson'
        }
        // Adicionaremos as informações dos outros filmes aqui
    };

    listaDeFilmes.addEventListener('click', function(event) {
        if (event.target && event.target.nodeName === 'LI') {
            const filmeId = event.target.getAttribute('data-filme');
            const filmeSelecionado = filmesInfo[filmeId];

            if (filmeSelecionado) {
                detalhesFilmeDiv.innerHTML = `
                    <h3>${filmeSelecionado.tituloOriginal}</h3>
                    <p><strong>Sinopse:</strong> ${filmeSelecionado.sinopse.replace(/\n/g, '<br>')}</p>
                    <p><strong>Duração:</strong> ${filmeSelecionado.duracao}</p>
                    <p><strong>Gênero:</strong> ${filmeSelecionado.genero}</p>
                    <p><strong>Direção:</strong> ${filmeSelecionado.direcao}</p>
                    <p><strong>Roteiro:</strong> ${filmeSelecionado.roteiro}</p>
                    <p><strong>Elenco:</strong> ${filmeSelecionado.elenco}</p>
                `;
            } else {
                detalhesFilmeDiv.innerHTML = '<p>Informações do filme não encontradas.</p>';
            }
        }
    });
});