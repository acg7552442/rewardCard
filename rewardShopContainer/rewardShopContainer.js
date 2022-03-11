import { LightningElement, api, track} from 'lwc';

import BLACK_HAT from '@salesforce/resourceUrl/black_hat';
import BLACK_SHIRT from '@salesforce/resourceUrl/black_shirt';
import BOUND_NOTEBOOK from '@salesforce/resourceUrl/bound_notebook';
import CARABINER from '@salesforce/resourceUrl/carabiner';
import DRAWSTRING_BAG from '@salesforce/resourceUrl/drawstring_bag';
import GRAY_HAT from '@salesforce/resourceUrl/gray_hat';
import GRAY_SHIRT from '@salesforce/resourceUrl/gray_shirt';
import KOOZIE from '@salesforce/resourceUrl/koozie';
import MUG from '@salesforce/resourceUrl/mug';
import PEN from '@salesforce/resourceUrl/pen';
import POWERBANK from '@salesforce/resourceUrl/powerbank';
import STICKERS from '@salesforce/resourceUrl/stickers';
import STICKY_NOTEPAD from '@salesforce/resourceUrl/sticky_notepad';
import STRESS_BALL from '@salesforce/resourceUrl/stress_ball';

const REWARDS = [
    {
        title: 'Black Hat',
        url: BLACK_HAT,
        qty: 0
    },
    {
        title: 'Black Shirt',
        url: BLACK_SHIRT,
        qty: 0
    },
    {
        title: 'Bound Notebook',
        url: BOUND_NOTEBOOK,
        qty: 0
    },
    {
        title: 'Carabiner',
        url: CARABINER,
        qty: 0
    },
    {
        title: 'Drawstring Bag',
        url: DRAWSTRING_BAG,
        qty: 0
    },
    {
        title: 'Gray Hat',
        url: GRAY_HAT,
        qty: 0
    },
    {
        title: 'Gray Shirt',
        url: GRAY_SHIRT,
        qty: 0
    },
    {
        title: 'Koozie',
        url: KOOZIE,
        qty: 0
    },
    {
        title: 'Mug',
        url: MUG,
        qty: 0
    },
    {
        title: 'Pen',
        url: PEN,
        qty: 0
    },
    {
        title: 'Powerbank',
        url: POWERBANK,
        qty: 0
    },
    {
        title: 'Stickers',
        url: STICKERS,
        qty: 0
    },
    {
        title: 'Sticky Notepad',
        url: STICKY_NOTEPAD,
        qty: 0
    },
    {
        title: 'Stress Ball',
        url: STRESS_BALL,
        qty: 0
    }
]

export default class RewardShopContainer extends LightningElement {
    rewards = REWARDS;
    @track rewardItems = [];

    submitItemInfo(event){
        this.rewardItems.push({
                                  title: event.detail.title,
                                  count:event.detail.count 
                                 }
                               )        
    }
   

}
