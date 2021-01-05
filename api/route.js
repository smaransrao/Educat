exports.routers = function(route)
{
  route.post('/orgdata',(req,res) => {
    console.log(req.body);
    res.send({success:'true'});
  });

  return route;
}