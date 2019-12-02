import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Route,MemoryRouter} from 'react-router-dom';


import  {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import CriarLista from './pages/lista/CriarLista';
import Rotas from './Rotas';
import Listas from './pages/lista/Listas';
import Lista from './pages/lista/Lista';


//importa todas as paginas e a ROTAS


configure({adapter:new Adapter()});
let pathMap={};

describe('Testando rotas do app', ()=>{
beforeAll(()=>{
  const component = shallow(<Rotas/>);
  pathMap = component.find(Route).reduce((pathMap, route)=>{
    const routeProps=route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
})

  



  it('/ carrega o componente Listas', ()=>{
    expect(pathMap ['/']).toBe(Listas);
    })
  
    it('/lista carrega o componente Lista', ()=>{
      expect(pathMap ['/lista']).toBe(Lista);
      })


  it('/criarlista carrega o componente CriarLista', ()=>{
  expect(pathMap ['/criarlista']).toBe(CriarLista);
  })
  
  test('/rotas utilizando Memory Route', () => {
    const envolope = mount(
      //ROTA
      <MemoryRouter inicialEntries={['/']}><Rotas/></MemoryRouter>
    );
    expect(envolope.find(Listas)).toHaveLength(1);
  })
  });                                                                                                                                                                                                                                   