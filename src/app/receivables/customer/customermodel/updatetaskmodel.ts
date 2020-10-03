

  export interface TaskModel {
      Id: number;
      Subject: string;
      AssignedTo: string;
      Status: string;
      AtDate: string;
      CustomerId: string;
      Name: string;
  }

  export interface TaskRootModel {
      ResponseCode: number;
      ResponseMessage: string;
      task: TaskModel;
  }



