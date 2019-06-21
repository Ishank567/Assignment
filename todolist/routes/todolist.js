const route = require('express').Router()

let todolist =[
       {id:"1",task: "task1", done: "Yes"},
       {id:"2",task: "task2", done: "No"},
       {id:"3",task: "task3", done: "Yes"},
       {id:"4",task: "task4", done: "Yes"},
       {id:"5",task: "task5", done: "No"},
       {id:"6",task: "task6", done: "Yes"}
]

route.get('/routes/todos' ,(req, res) => res.send(todolist))

route.post('/routes/todos' ,(req, res) =>{
   todolist.push({
       id:req.body.id,
       task: req.body.task,
       done: req.body.done
   })
   res.send(todolist)
})

route.get('/:id', (req, res) => res.send(todolist[req.params.id]))

route.patch('/:id' ,(req,res) =>{
    todolist.patch({
            id: req.body.id,
            task: req.body.task,
            done: req.body.done
        })
        res.send(todolist)

})
route.delete('/:id' ,(req,res)=>{
    todolist.delete({
        id: req.body.id,
        task: req.body.task,
        done: req.body.done

    })
}
)


module.exports = route