import { LightningElement, api } from 'lwc';

export default class RewardCard extends LightningElement {
    @api itemImgUrl;
    @api itemTitle;
    @api itemLineStr;

    @api count=0;
   // @api rewards; 

    handleIncrement(){
        this.count = this.count+1;
       // submitStr="Submit " + this.count;


    }

    handleDecrement(){
        if (this.count > 0) {
            this.count=this.count-1;
          //  submitStr="Submit " + this.count;
        }
    }

    handleSubmit(){
    
        if (this.count>0) {
            this.dispatchEvent(
                                new CustomEvent('submitItemInfo',{ detail: { title:      this.itemTitle, 
                                                                             count : this.count
                                                                           } 
                                                                }
                                               )   
                                )
            }
        // reset
        this.count = 0;
    }
}