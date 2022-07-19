import {GifApp} from "../src/GifApp";
import {render,screen, fireEvent} from "@testing-library/react";



describe ('Test en GifApp', ()=>{

    beforeEach(()=>{ 

        render(<GifApp></GifApp>);
    });

    test('Debe verificar el estado inicial',()=>{ 

        const h1 = screen.queryByRole ('heading', {level:1});

        expect(h1).not.toBeNull();
    });

    test('Verificar cambio en el estado de categorias', async () => {

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        fireEvent.change(input, {target: {value: 'Dragon Ball'}});

        fireEvent.submit(form);
        
    });

    test('Verificar el boton de Reset', () => {

        const {getByTestId} = screen;

        const buttonR = getByTestId('Button R');       
        
        fireEvent.click(buttonR);
            
        expect(buttonR).toBeTruthy();
        
    });
    
    

});