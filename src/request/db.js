var database = {
    user: {
        user_id: '',
        user_name: '',
        phone: '',
        password: '',
        avtar_url: '',
        company_id: '',
        create_time: '',
        salt: '',
    },
    company: {
        company_id: '',
        company_name: '',
        description: '',
        create_time: '',
    },
    project: {
        project_id: '',
        project_name: '',
        description: '',
        found_date: '',
        address: '',
        BP_url: '',
        finance_round: '',
        finance_number: '',
        template_id:'',
        template_content:{

        },
        tags:[],
        investor: ['', ''],
        create_time: ''
    },
    investor: {
        investor_id: '',
        investor_name: '',
        type: '',
        description: '',
        template_id:'',
        template_content:{

        },
        tags:[],
        history: ['', ''],
    },
    resource: {
        resource_id: '',
        resource_name: '',
        type: '',
        template_id:'',
        template_content:{

        },
        tags:[],
        create_time: ''
    },
    library: {
        library_id: '',
        library_name: '',
        title: '',
        type: '',
        url: '',
        tags:[],
        create_time: ''
    },
    tag: {
        tag_id:'',
        tag_name:'',
        ptag_id:'',
    },
    key_person:{
        person_id:'',
        person_name:'',
        phone:'',
        email:'',
        position:'',
        project_id:'',
        remark:'',
        create_time:''
    },
    template: {
        template_id:'',
        template_name:'',
        component_ids:[],
    },
    component:{
        component_id:'',
        component__name:'',
        type:'',
    },
    tracer: {
        meaasge_id: '',
        user_id: '',
        work_id:'',
        person_id:'',
        operation: '',
        message: '',
        create_time: ''
    },
    todo:{
        todo_id: '',
        user_id: '',
        at_user_id:'',
        operation: '',
        message: '',
        create_time: ''
    }
}