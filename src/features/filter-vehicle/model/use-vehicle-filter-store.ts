import {create} from 'zustand';
import {IVehicleFilter} from '../model/vehicle-filter';

interface IVehicleFilterStore {
  filter: Partial<IVehicleFilter>;
  setType: (type: string) => void;
  setBrand: (brand: string) => void;
  setModel: (model: string) => void;
  setYear: (year: string) => void;
  setFilter: (data: Partial<IVehicleFilter>) => void;
}

export const useVehicleFilterStore = create<IVehicleFilterStore>()(set => ({
  filter: {},
  setType: type =>
    set(() => ({
      filter: {
        type,
      },
    })),
  setBrand: brand =>
    set(state => ({
      filter: {
        type: state.filter.type,
        brand,
      },
    })),
  setModel: model =>
    set(state => ({
      filter: {
        type: state.filter.type,
        brand: state.filter.brand,
        model,
      },
    })),
  setYear: year =>
    set(state => ({
      filter: {
        type: state.filter.type,
        brand: state.filter.brand,
        model: state.filter.model,
        year,
      },
    })),
  setFilter: data => set(state => ({filter: {...state.filter, ...data}})),
}));
