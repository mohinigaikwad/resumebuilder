export const initialState = {
  personal: {
    name: "",
    summary: "",
    email: "",
    phone: "",
    website1: "",
    website2: "",
    location: "",
  },
  education: [
    {
      school: "",
      startDate: "",
      endDate: "",
      degree: "",
      percentage: "",
      description: "",
    },
  ],
  experience: [
    {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  project: [
    {
      projectname: "",
      startDate: "",
      endDate: "",
      link: "",
      description: "",
    },
  ],
  certificate: [
    {
      certname: "",
      certlink: "",
      certdescription: "",
    },
  ],
  language: [
    {
      language: "",
    },
  ],
  award: [
    {
      award: "",
      awarddescription: "",
    },
  ],

  skills: "",

  visibility: {
    experience: true,
    education: true,
    project: true,
    skills: true,
    certificate: true,
    language: true,
    award: true,
  },
};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    // personal
    //
    case "SET_PERSONAL_FIELD":
      return {
        ...state,
        personal: { ...state.personal, [action.field]: action.value },
      };
    case "RESET_PERSONAL":
      return {
        ...state,
        personal: {
          name: "",
          summary: "",
          email: "",
          phone: "",
          website1: "",
          website2: "",
          location: "",
        },
      };

    // experince

    case "ADD_EXPERIENCE":
      console.log("cliked exxxxx");

      return {
        ...state,
        experience: [
          ...state.experience,
          {
            company: "",
            title: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      };

    case "UPDATE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.map((exp, i) =>
          i === action.index ? { ...exp, [action.field]: action.value } : exp
        ),
      };

    case "DELETE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.filter((exp, i) => i !== action.index),
      };

    case "RESET_EXPERIENCE":
      return {
        ...state,
        experience: [
          {
            company: "",
            title: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      };

    // expericne end

    // education
    case "ADD_EDUCATION":
      console.log("cliked exxxxx");

      return {
        ...state,
        education: [
          ...state.education,
          {
            school: "",
            startDate: "",
            endDate: "",
            degree: "",
            percentage: "",
            description: "",
          },
        ],
      };

    case "UPDATE_EDUCATION":
      return {
        ...state,
        education: state.education.map((exp, i) =>
          i === action.index ? { ...exp, [action.field]: action.value } : exp
        ),
      };

    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((exp, i) => i !== action.index),
      };

    case "RESET_EDUCATION":
      return {
        ...state,
        education: [
          {
            school: "",
            startDate: "",
            endDate: "",
            degree: "",
            percentage: "",
            description: "",
          },
        ],
      };

    // EDUCATION END
    //
    //
    // project start PROJECT
    case "ADD_PROJECT":
      console.log("cliked exxxxx");

      return {
        ...state,
        project: [
          ...state.project,
          {
            projectname: "",
            startDate: "",
            endDate: "",
            link: "",
            description: "",
          },
        ],
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        project: state.project.map((exp, i) =>
          i === action.index ? { ...exp, [action.field]: action.value } : exp
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        project: state.project.filter((exp, i) => i !== action.index),
      };

    case "RESET_PROJECT":
      return {
        ...state,
        project: [
          {
            projectname: "",
            startDate: "",
            endDate: "",
            link: "",
            description: "",
          },
        ],
      };

    // project end

    //skills start
    case "SET_SKILLS":
      return {
        ...state,
        skills: action.value,
      };

    case "RESET_SKILLS":
      return {
        ...state,
        skills: "",
      };

    // skills end

    // certifiate start

    case "ADD_CERTIFICATE":
      console.log("cliked exxxxx");

      return {
        ...state,
        certificate: [
          ...state.certificate,
          {
            certname: "",
            certlink: "",
            certdescription: "",
          },
        ],
      };

    case "UPDATE_CERTIFICATE":
      return {
        ...state,
        certificate: state.certificate.map((exp, i) =>
          i === action.index ? { ...exp, [action.field]: action.value } : exp
        ),
      };

    case "DELETE_CERTIFICATE":
      return {
        ...state,
        certificate: state.certificate.filter((exp, i) => i !== action.index),
      };

    case "RESET_CERTIFICATE":
      return {
        ...state,
        certificate: [
          {
            certname: "",
            certlink: "",
            certdescription: "",
          },
        ],
      };

    // certifiate end
    //
    // lang start

    case "ADD_LANGUAGE":
      console.log("cliked LAN");

      return {
        ...state,
        language: [
          ...state.language,
          {
            language: "",
          },
        ],
      };

    case "UPDATE_LANGUAGE":
      return {
        ...state,
        language: state.language.map((exp, i) =>
          i === action.index ? { ...exp, [action.field]: action.value } : exp
        ),
      };

    case "DELETE_LANGUAGE":
      return {
        ...state,
        language: state.language.filter((exp, i) => i !== action.index),
      };

    case "RESET_LANGUAGE":
      return {
        ...state,
        language: [
          {
            language: "",
          },
        ],
      };

    // lang end
    //
    // awrd start

    case "ADD_AWARD":
      console.log("cliked LAN");

      return {
        ...state,
        award: [
          ...state.award,
          {
            award: "",
            awarddescription: "",
          },
        ],
      };

    case "UPDATE_AWARD":
      return {
        ...state,
        award: state.award.map((exp, i) =>
          i === action.index ? { ...exp, [action.field]: action.value } : exp
        ),
      };

    case "DELETE_AWARD":
      return {
        ...state,
        award: state.award.filter((exp, i) => i !== action.index),
      };

    case "RESET_AWARD":
      return {
        ...state,
        award: [
          {
            award: "",
            awarddescription: "",
          },
        ],
      };

    // award end

    case "VISIBILITY":
      return {
        ...state,
        visibility: {
          ...state.visibility,
          // agar action.section === "experince" aaya to  ye line banegi
          // experience : !state.visibiltiy.experience
          [action.section]: !state.visibility[action.section],
        },
      };

    default:
      return state;
  }
}
