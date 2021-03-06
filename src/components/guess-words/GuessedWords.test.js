import Enzyme, {shallow} from 'enzyme';
import {findByAttr, checkProps} from '../../test/testUtils.js'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import GuessedWords from './GuessedWords'
Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps = {
    guessedWords: []
}
const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warning with expected props', ()=>{
    checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
        
        wrapper = setup({guessedWords: []});
    })
    test('renders without error', ()=>{
        const component = findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', ()=>{
        const instructions = findByAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
});

describe('if there are words guessed', ()=>{
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ];
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords});
    })
    test('renders without error', ()=>{
        const component = findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    })
    test('renders test words section', ()=>{
        const guessedWordsNode = findByAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    })
    test('correct numbers of guessed words', ()=>{
        const guessedWordsNodes = findByAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    })
});