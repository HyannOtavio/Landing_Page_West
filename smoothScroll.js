class SmoothScroll{//cria uma classe para o Scroll Suave

        constructor(links){//recebe os links da pagina html
            this.linkElements = document.querySelectorAll(links);
            this.addClickEvent()
        }

        addClickEvent(){//adiciona o evento de click 
            //quando ocorrer o click no link ele executa a função de callback
        this.linkElements.forEach(link => {
            link.addEventListener("click", (event) =>{//adiciona o scroll suave
                event.preventDefault()//salva o scroll suave como padrão
                const section = document.querySelector( event.currentTarget.getAttribute("href"))//seleciona a seção 
                //e o currentTarget identifica a seção onde esta (link atual)
                window.scrollTo({//executa o scroll suave
                    top:section.offsetTop, // - (window.innerHeight - section.clientHeight) /2,
                    //deixa na metade da tela cada section
                    behavior :"smooth"
             })
            })
        })
        }
}

// class ActiveSmoothScroll extends SmoothScroll{//extende a classe SmoothScroll e adiciona o local onde está

//     constructor(links, sections){
//         super(links);//o super retoma o construtor da classe original 
        
//         this.sectionElements = document.querySelectorAll(sections)//retomda selecionando todas as sections 
//         this.handleScroll = this.handleScroll.bind(this)
//         this.activeNavScroll()
//     }

//     activeNavScroll(){
//         window.addEventListener("scroll", () => {//função de callback onde adiciona a cor vermelha ao "a" clicado

//             this.sectionElements.forEach((section, i) => {
//                 if(window.pageYOffset > section.offsetTop){
//                     this.linkElements[i].classList.add("active")
//                 }else{
//                     this.linkElements[i].classList.remove("active")
//                 }
//             })
//         })
//     }

// }

const scroll = new SmoothScroll("a[href^='#']" , "sections");
//recebe os links internos que começam com #
//passa a seção atual como parametro para adicionar a marcação 