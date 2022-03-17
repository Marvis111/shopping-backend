const app = require('../app');

const indexRoutes = require('../routes/indexRoutes');

app.use('/',indexRoutes);


app.listen(app.get('port'),()=>{
    console.log('server runnning on port: '+app.get('port'))
})