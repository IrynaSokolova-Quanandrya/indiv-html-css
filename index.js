const delay = (time) => {
    return new Promise((resolve) => {
    setTimeout(()=>{resolve('hello')}, time)
})
}

delay(1000)   	// wait 1000 ms / 1 sec
.then(
	// код который выполнится с задержкой
  console.log("will be called in 1 sec")
)

delay(5000).then(alert("Hello world"))