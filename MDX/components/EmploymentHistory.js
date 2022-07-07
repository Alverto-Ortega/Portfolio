import React from "react";

const employment = [
    {
        company: "self-employed @ upwork",
        role: "Full-Stack Web Developer",
    },
    {
        company: "Dunkin Donuts",
        role: "Overnight Shift Leader/baker"
    },
];

const EmploymentHistory = () => {
    return (
        
        <div className="text-left max-w-xl mx-auto">
        
            <div className="grid grid-cols-2 gap-2 mt-5">
        
                    {employment.map(({role, company}) => (
                        <div key={company.toString()}>
                        <div className="flex justify-end font-bold">
                            <p>{role}</p>
                        </div>
                        <p>{company}</p>
                    </div>
                    ))}
         
        
            </div>
            
        </div>
    );
};

export default EmploymentHistory;