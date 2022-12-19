const counters = document.querySelectorAll(".counter")

counters.forEach(counter =>{
    counter.innerText = '0'

    const updateCounter = ()=>{
        // const target = +counter.getAttribute('data-target')
        // initially a string
        const target = +counter.getAttribute('data-target')
        //with plus sign it turns into number
        // console.log(typeOf(target), target)

        const c = +counter.innerText

        const increment = target / 200
        if( c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        }
        else{
            counter.innerText = target
        }

        // console.log(increment)

    }

    updateCounter()


})