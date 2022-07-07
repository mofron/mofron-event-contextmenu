/**
 * @file mofron-event-contextmenu/index.js
 * @brief right click event for mofron
 * ## event function parameter
 *  - component: event target component object
 *  - event: "mouseover" event object by addEventListener
 *  - mixed: user specified parameter
 * @license MIT
 */

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('ContextMenu');
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    contents (tgt_dom) {
        try {
	    let evt_obj = this;
            tgt_dom.getRawDom()['oncontextmenu'] = (ev) => {
                try {
                    evt_obj.execListener(ev);
                    return false;
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
