const Router = require('express');
const router = Router.Router();
const hbs = require('hbs');

const arr0 = [112, 7, -15, 4, 34, -79, -1, 30, 1, 76];
let arr = [112, 7, -15, 4, 34, -79, -1, 30];
let i = 0, j = 0;

/*hbs.registerHelper('each_in', function(arr, options) {
    if(!arr || arr.length === 0)
        return options.fn.inverse(this);
    let ret = "<p>";
    for(let i = 0; i < arr.length; i++) {
        ret = ret + arr[i];
    }
    return ret+"</p>";
});*/

router.get('/', (req, res) => {
    try {
        return res.status(200).render('main', {
            arr: arr,
            layout: false
        });
    }
    catch(e) {
        console.log(e);
        return res.send('All bad(');
    }
});
router.put('/show', (req, res) => {
    try {
        return res.status(200).json({arr: arr});
    }
    catch(e) {
        console.log(e);
        return res.send('All bad(');
    }
});
router.put('/get',(req, res) => {
    try {
        const {index} = req.body;
        console.log("i: ", i);
        i++;
        /*console.log(index);*/
        return res.status(200).json({val: arr[index]});
    }
    catch(e) {
        console.log(e);
        return res.send('All bad(');
    }
});
router.put('/put', (req, res) => {
    try {
        const {index, val} = req.body;
        arr[index] = val;
        console.log("j:", j);
        j++;
        /*console.log(`Index:${index}, Value:${val}`);*/
        return res.status(200).json({val: arr[index]});
    }
    catch(e) {
        console.log(e);
        return res.send('All bad(');
    }
});
router.put('/bubble_sort', (req, res) => {
    try {
        return res.status(200);
    }
    catch(e) {
        console.log(e);
        return res.send('All bad(');
    }
});
router.put('/length', (req, res) => {
    try {
        return res.status(200).json({length: `${arr.length}`});
    }
    catch(e) {
        console.log(e);
        return res.send('All bad(');
    }
});
module.exports = router;