
import dividerDesktop from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'
import dice from '../images/icon-dice.svg'
import { useEffect, useState } from 'react'

type Advice = {
    id: number;
    advice: string;
  }

const AdviceCard = () => {
const [advice, setAdvice] = useState<Advice | null>(null)

    const getAdvice = async()=>{
        try{
            const response = await fetch('https://api.adviceslip.com/advice')
            const data = await response.json();
            console.log(data)
            setAdvice(data.slip);
        }catch(error){
            console.error("Failed to fetch advice", error);
        }

    }

    useEffect(()=>{
        getAdvice()
    },[])
    return (

    <div className='card'>
             {advice ? (
        <>
          <p>Advice #{advice.id}</p>
          <h2>{advice.advice}</h2>
        </>
      ) : (
        <p>Loading advice...</p>
      )}
        <img src={dividerDesktop} className='divider-desktop' alt='divider' />
        <img src={dividerMobile} className='divider-mobile' alt='divider' />
        <div className='dice' onClick={getAdvice}>
            <img src={dice} alt="dice" />
        </div>
    </div>
  )
}

export default AdviceCard