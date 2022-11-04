import {screen, render} from '@testing-library/react'
import Launch from './Launch'

test('render Launch component successfully',()=>{

    render(<Launch />)
    
})


test('Launch should have mission title Element ',()=>{
    
    render(<Launch />)
  const  missionTitle = screen.getByTitle('mission-title')
    
    expect(missionTitle).toBeInTheDocument()
})

test('Lauch compoent should rocket name Element',()=>{
    render(<Launch />)

    const h2El = screen.getByTitle('rocket')

    expect(h2El).toBeInTheDocument()
    
})


test('Launch component shouold have state Element',()=>{
    render(<Launch />)
})

test('Launch component should have image container',()=>{
    render(<Launch />)
})