import { Reducer } from "redux";

export interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

export interface CreateCustomerAction {
  type: 'customer/createCustomer';
  payload: {
    fullName: string;
    nationalID: string;
    createAd: string;
  };
}

interface UpdateNameAction {
  type: 'customer/updateName';
  payload: string;
}

type ActionCustomer = CreateCustomerAction | UpdateNameAction;

const initialStateCustomer: CustomerState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export function createCustomer(fullName: string, nationalID: string): CreateCustomerAction {
  return {type: 'customer/createCustomer', payload: {
    fullName, nationalID, createAd: new Date().toLocaleDateString()
  }};
}

export function updateName(fullName: string): UpdateNameAction {
  return {type: 'customer/updateName', payload: fullName};
}


export const customerReducer: Reducer<CustomerState, ActionCustomer> = (state=initialStateCustomer, action) => {
  switch(action.type) {
    case 'customer/createCustomer':
      return{
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createAd
      };
    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload
      };
    default:
      return state;
  }
};