const PlayH=document.querySelector(".Phours")
const playT=document.querySelector(".Ptitle")
const PlayRH=document.querySelector(".PRhours")
const workH=document.querySelector(".Whours")
const workT=document.querySelector(".Wtitle")
const workRh=document.querySelector(".WRhours")
const ExeH=document.querySelector(".Ehours")
const ExeT=document.querySelector(".Etitle")
const ExeRH=document.querySelector(".ERhours")
const studyH=document.querySelector(".Shours")
const studyT=document.querySelector(".Stitle")
const studyRH=document.querySelector(".SRhours")
const selfH=document.querySelector(".Fhours")
const selfT=document.querySelector(".Ftitle")
const selfRH=document.querySelector(".FRhours")
// const all=document.querySelector(".FRhours")
const socH=document.querySelector(".Ohours")
const socT=document.querySelector(".Otitle")
const socRH=document.querySelector(".ORhours")
const daily=document.querySelector(".Daily")
const weekly=document.querySelector(".Weekly")
const monthly=document.querySelector(".Monthly")

//default
const fecthData=async()=>{
    await fetch('data.json')
    .then(response=>response.json())
    .then(data=>{
        // data.map(element => {
            console.log(data)
            PlayH.innerHTML=data.Playing.Play.timeframes.weekly.current
            playT.textContent=data.Playing.Play.title
            PlayRH.textContent=data.Playing.Play.timeframes.weekly.previous
            workH.innerHTML=data.Work.Work.timeframes.weekly.current
            workT.textContent=data.Work.Work.title
            workRh.textContent=data.Work.Work.timeframes.weekly.previous
            ExeH.innerHTML=data.Exercise.Exercise.timeframes.weekly.current
            ExeT.textContent=data.Exercise.Exercise.title
            ExeRH.textContent=data.Exercise.Exercise.timeframes.weekly.previous
            studyH.innerHTML=data.Study.Study.timeframes.weekly.current
            studyT.textContent=data.Study.Study.title
            studyRH.textContent=data.Study.Study.timeframes.weekly.previous
            selfH.innerHTML=data.Self.Self.timeframes.weekly.current
            selfT.textContent=data.Self.Self.title
            selfRH.textContent=data.Self.Self.timeframes.weekly.previous
            socH.innerHTML=data.Social.Social.timeframes.weekly.current
            socT.textContent=data.Social.Social.title
            socRH.textContent=data.Social.Social.timeframes.weekly.previous
            console.log(PlayRH)
            
            console.log(PlayH)
        // });
    })
    .catch(error=>console.log(error))
    
    console.log("hello")
}
fecthData()

//daily
daily.addEventListener('click',async()=>{
    await fetch('data.json')
    .then(response=>response.json())
    .then(data=>{
        // data.map(element => {
            console.log(data)
            PlayH.innerHTML=data.Playing.Play.timeframes.daily.current
            playT.textContent=data.Playing.Play.title
            PlayRH.textContent=data.Playing.Play.timeframes.daily.previous
            workH.innerHTML=data.Work.Work.timeframes.daily.current
            workT.textContent=data.Work.Work.title
            workRh.textContent=data.Work.Work.timeframes.daily.previous
            ExeH.innerHTML=data.Exercise.Exercise.timeframes.daily.current
            ExeT.textContent=data.Exercise.Exercise.title
            ExeRH.textContent=data.Exercise.Exercise.timeframes.daily.previous
            studyH.innerHTML=data.Study.Study.timeframes.daily.current
            studyT.textContent=data.Study.Study.title
            studyRH.textContent=data.Study.Study.timeframes.daily.previous
            selfH.innerHTML=data.Self.Self.timeframes.daily.current
            selfT.textContent=data.Self.Self.title
            selfRH.textContent=data.Self.Self.timeframes.daily.previous
            socH.innerHTML=data.Social.Social.timeframes.daily.current
            socT.textContent=data.Social.Social.title
            socRH.textContent=data.Social.Social.timeframes.daily.previous
            console.log(PlayRH)
            
            console.log(PlayH)
        // });
    })
    .catch(error=>console.log(error))
    
})

//weekly
weekly.addEventListener('click',async()=>{
    await fetch('data.json')
    .then(response=>response.json())
    .then(data=>{
        // data.map(element => {
            console.log(data)
            PlayH.innerHTML=data.Playing.Play.timeframes.weekly.current
            playT.textContent=data.Playing.Play.title
            PlayRH.textContent=data.Playing.Play.timeframes.weekly.previous
            workH.innerHTML=data.Work.Work.timeframes.weekly.current
            workT.textContent=data.Work.Work.title
            workRh.textContent=data.Work.Work.timeframes.weekly.previous
            ExeH.innerHTML=data.Exercise.Exercise.timeframes.weekly.current
            ExeT.textContent=data.Exercise.Exercise.title
            ExeRH.textContent=data.Exercise.Exercise.timeframes.weekly.previous
            studyH.innerHTML=data.Study.Study.timeframes.weekly.current
            studyT.textContent=data.Study.Study.title
            studyRH.textContent=data.Study.Study.timeframes.weekly.previous
            selfH.innerHTML=data.Self.Self.timeframes.weekly.current
            selfT.textContent=data.Self.Self.title
            selfRH.textContent=data.Self.Self.timeframes.weekly.previous
            socH.innerHTML=data.Social.Social.timeframes.weekly.current
            socT.textContent=data.Social.Social.title
            socRH.textContent=data.Social.Social.timeframes.weekly.previous
            console.log(PlayRH)
            
            console.log(PlayH)
        // });
    })
    .catch(error=>console.log(error))
    
})

//monthly
monthly.addEventListener('click',async()=>{
    await fetch('data.json')
    .then(response=>response.json())
    .then(data=>{
        // data.map(element => {
            console.log(data)
            PlayH.innerHTML=data.Playing.Play.timeframes.monthly.current
            playT.textContent=data.Playing.Play.title
            PlayRH.textContent=data.Playing.Play.timeframes.monthly.previous
            workH.innerHTML=data.Work.Work.timeframes.monthly.current
            workT.textContent=data.Work.Work.title
            workRh.textContent=data.Work.Work.timeframes.monthly.previous
            ExeH.innerHTML=data.Exercise.Exercise.timeframes.monthly.current
            ExeT.textContent=data.Exercise.Exercise.title
            ExeRH.textContent=data.Exercise.Exercise.timeframes.monthly.previous
            studyH.innerHTML=data.Study.Study.timeframes.monthly.current
            studyT.textContent=data.Study.Study.title
            studyRH.textContent=data.Study.Study.timeframes.monthly.previous
            selfH.innerHTML=data.Self.Self.timeframes.monthly.current
            selfT.textContent=data.Self.Self.title
            selfRH.textContent=data.Self.Self.timeframes.monthly.previous
            socH.innerHTML=data.Social.Social.timeframes.monthly.current
            socT.textContent=data.Social.Social.title
            socRH.textContent=data.Social.Social.timeframes.monthly.previous
            console.log(PlayRH)
            
            console.log(PlayH)
        // });
    })
    .catch(error=>console.log(error))
    
})