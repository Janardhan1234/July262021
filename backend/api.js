const { User } = require('./models/User');

const router  = require('express').Router()

router.get('/user',(req,res)=>{
    let qp = req.query
    let age = null
    if(qp['minage']){
        age = {
            $gte: qp['minage']
        }
    }
    else if(qp['maxage']){
        age = {
            $lte: qp['maxage']
        }
    }
    else if(qp['minage'] && qp['maxage']){
        age = {
            $lte: qp['maxage'],
            $gte: qp['minage']
        }
    }

    let query = {}
    if(age){
        query['age'] = age
    }

    

    User.find(query,(err,docs)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.send(docs)
    })
})

router.patch('/user/:id',(req,res)=>{
    let data = req.body
    User.findByIdAndUpdate(req.params.id,{
        $set:data
    },{
        new:true
    },(err,doc)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.send(doc)
    })
})



router.delete('/user/:id',(req,res)=>{
    let data = req.body
    User.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.send({deleted:true})
    })
})
router.post('/user',(req,res)=>{
    let data = req.body;
    let user = new User()
    user.name = data.name 
    user.dob = data.dob,
    user.phone = data.phone
    user.email = data.email
    user.linkedin_profile = data.linkedin_profile
    user.age = data.age
    user.about = data.about

    user.save((err,saved)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.send(saved)
    })
})


module.exports = router;