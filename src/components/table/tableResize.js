import {$} from '@core/dom';

export function resizeHandler($root, event) {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const cords = $parent.getCords()
    const resizeType = event.target.dataset.resize
    const sideProp = resizeType === 'col' ? 'bottom' : 'right'
    let value

    $resizer.css({
        opacity: 1,
        [sideProp]: '-5000px'
    })


    console.log($parent.data.col)
    document.onmousemove = e => {
        if(resizeType === 'col'){
            const delta = e.pageX - cords.right
            $resizer.css({right: -delta + 'px'})
            value = cords.width + delta
        }else{
            const delta = e.pageY - cords.bottom
            $resizer.css({bottom: -delta + 'px'})
            value = cords.height + delta
        }
        // console.log(delta)
    }

    document.onmouseup = e =>{
        document.onmousemove = null
        document.onmouseup = null

        if(resizeType === 'col'){
            $parent.css({width: value + 'px'})
            $root.findAll(`[data-col="${$parent.data.col}"]`)
                .forEach(el => el.style.width = value + 'px')
        }else{
            $parent.css({height: value + 'px'})
            $root.findAll(`[data-col="${$parent.data.col}"]`)
                .forEach(el => el.style.height = value + 'px')
        }


        $resizer.css({
            opacity: 0,
            bottom: 0,
            right: 0
        })
    }
}