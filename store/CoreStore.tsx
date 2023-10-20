import {makeAutoObservable} from "mobx";
import {IFilter} from "@/interface";

export default class CoreStore {
    filter: IFilter = {
        brand: [],
        color: [],
        gender: []
    }
    tempMobileFilter: IFilter = {
        brand: [],
        color: [],
        gender: []
    }
    sorting: string = 'new';
    pageList: number = 0;
    showModalDelivery: boolean = false;
    showModalSize: boolean = false;
    mobileMode: boolean = false;
    smallScreen: boolean = false;
    showMobileFilter: boolean = false;


    constructor() {
        makeAutoObservable(this);
    }

    setMobileMode(data: boolean) {
        this.mobileMode = data;
    }

    setSmallScreen(data: boolean) {
        this.smallScreen = data;
    }

    setMobileFilter(data: boolean) {
        if (data) {
            this.tempMobileFilter.brand = [...this.filter.brand]
            this.tempMobileFilter.color = [...this.filter.color]
            this.tempMobileFilter.gender = [...this.filter.gender]
        }

        this.showMobileFilter = data;

        document.body.style.overflow = data ? 'hidden' : 'auto';
    }

    setTempMobileFilter(data: { flag: boolean, value: string, type: string }) {
        const arr = [...this.tempMobileFilter[data.type]];
        if (data.flag) {
            arr.push(data.value);
        } else {
            arr.splice(arr.indexOf(data.value), 1);
        }
        this.tempMobileFilter[data.type] = arr;
    }

    activatedTempFilter() {
        this.filter.brand = [...this.tempMobileFilter.brand]
        this.filter.color = [...this.tempMobileFilter.color]
        this.filter.gender = [...this.tempMobileFilter.gender]

        this.showMobileFilter = false;

        document.body.style.overflow = 'auto';
    }

    setShowModalDelivery(data: boolean) {
        this.showModalDelivery = data;
    }

    setShowModalSize(data: boolean) {
        this.showModalSize = data;
    }

    setFilter(data: { flag: boolean, value: string, type: string }) {
        const arr = [...this.filter[data.type]];
        if (data.flag) {
            arr.push(data.value);
        } else {
            arr.splice(arr.indexOf(data.value), 1);
        }
        this.filter[data.type] = arr;
    }

    resetFilter() {
        this.filter = {
            brand: [],
            color: [],
            gender: []
        }
    }

    setSorting(data: string) {
        this.sorting = data;
    }

    setPageList(data: number) {
        this.pageList = data;
    }
}