var ofuscar_tela_menu = document.querySelector('.ofuscar_tela_menu')
var fechar_menu = document.querySelector('.fechar_menu')
var info_menu = document.querySelector('.info_menu')
var menu = document.querySelector('.menu')
var header = document.querySelector('.header')
var body = document.querySelector('.body')
var modo_escuro_li = document.querySelector('.modo_escuro_li')
var links_computador = [...document.querySelectorAll('.links_computador')]
var icon_verso_comp_none = [...document.querySelectorAll('.icon_verso_comp_none')]
var home_link_div = document.querySelector('.home_link_div')
var chat_link_div = document.querySelector('.chat_link_div')
var notificacao_link_div = document.querySelector('.notificacao_link')
var pagamento_link_div= document.querySelector('.pagamento_link_div')
var search = document.querySelector('.search')
var container_pesquisa = document.querySelector('.container_pesquisa')
var ceta_voltar = document.querySelector('.ceta_voltar')
var home = document.querySelector('.home')
var LarguraTela = body.offsetWidth
var AlturaTela = body.offsetHeight

document.querySelector("#pesquisa").focus()

var div_form_versão_pc = document.querySelector('.div_form_versão_pc')
var ceta = document.querySelector('.ceta')

window.addEventListener('resize', ()=>{
    
    if(LarguraTela > '375' && LarguraTela < '600')
    {
        search.addEventListener('click', ()=>{
            div_form_versão_pc.style.display = 'block'
            search.style.display = 'none'
        })
        ceta.addEventListener('click', ()=>{
            div_form_versão_pc.style.display = 'none'
            ceta.style.display = 'none'
            search.style.display = 'block'
        })
    }
    
})
if(LarguraTela > '375' && LarguraTela < '600')
{
    search.addEventListener('click', ()=>{
        div_form_versão_pc.style.display = 'block'
        search.style.display = 'none'
    })
    ceta.addEventListener('click', ()=>{
        div_form_versão_pc.style.display = 'none'
        ceta.style.display = 'none'
        search.style.display = 'block'
    })
}



//CONFIGURAÇÕES

window.addEventListener('resize', ()=>{
    
    if(LarguraTela <= '375')
{
    search.addEventListener('click', ()=>{
            container_pesquisa.style.display = 'block'
            header.style.display = 'none'
            
    })
    
}
    
})

if(LarguraTela <= '375')
{
    search.addEventListener('click', ()=>{
            container_pesquisa.style.display = 'block'
            header.style.display = 'none'
            
    })
    
}

ceta_voltar.addEventListener('click', ()=>{
    container_pesquisa.style.display = 'none'
    header.style.display = 'block'
})
window.addEventListener('load', ()=>{
    home.style.backgroundColor = '#A6CE95'
   
})




const Menu = ()=>{
    if(info_menu.classList.toggle('menu_left')){
       ofuscar_tela_menu.style.display = 'block'
       
    }else{
        ofuscar_tela_menu.style.display = 'none'
        info_menu.style.display = 'block'
    }
    }


     ofuscar_tela_menu.addEventListener('click', ()=>{
        Menu()
    })
    menu.addEventListener('click', ()=>{
        menu.classList.add('menu_left')
        Menu()
    })
    

    fechar_menu.addEventListener('click', ()=>{
        info_menu.classList.remove('menu_left')
        ofuscar_tela_menu.style.display = 'none'
    })    
    


