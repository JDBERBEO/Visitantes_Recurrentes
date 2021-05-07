

const Visitor = require('./Visitor')

const newVisitor = async (req, res) => {
    //console.log('hola desde controller ')
    const visitor = new Visitor({name : req.query.name,})
    
    await visitor.save()
    //console.log('visitor created')
    res.send('<h1>El visitante fue almacenado con éxito</h1>')
}

const countVisitor = async (req, res) =>  {
    const name = req.query.name

    let visitor = await Visitor.findOne({name})
  
    if(visitor === null) {
        visitor = new Visitor({name : req.query.name || "Anónimo"} )
        await visitor.save()
    }

    visitor.count++
    await visitor.save()

    const visitors = await Visitor.find().lean();
    console.log('visitors: ', visitors)
    res.render('visitors', visitors)

}

module.exports = {
    newVisitor,
    countVisitor
}