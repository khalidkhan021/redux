// Update in Counter 8 -- Separate action file as class
export default class CounterAction {

    // static properties to be used in reducer for switch cases
    static INCREMENT = "INCREMENT";
    static DECREMENT = "DECREMENT";


    // static functions to be mapped with dispatch in component
    static increment(){
        return { 
            type: 'INCREMENT'
        }
    }

    static decrement(){
        return { 
            type: 'DECREMENT' 
        }
    }

}