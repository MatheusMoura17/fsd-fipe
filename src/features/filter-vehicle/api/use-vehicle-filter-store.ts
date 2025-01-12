import {create} from 'zustand';
import {IVehicleFilter} from '../model/vehicle-filter';

interface IVehicleFilterStore {
  filter: Partial<IVehicleFilter>;
  setType: (type: string) => void;
  setBrand: (brand: string) => void;
  setModel: (model: string) => void;
  setYear: (year: string) => void;
}

export const useVehicleFilterStore = create<IVehicleFilterStore>()(set => ({
  filter: {},
  setType: type => set(state => ({filter: {...state.filter, type}})),
  setBrand: brand => set(state => ({filter: {...state.filter, brand}})),
  setModel: model => set(state => ({filter: {...state.filter, model}})),
  setYear: year => set(state => ({filter: {...state.filter, year}})),
}));
