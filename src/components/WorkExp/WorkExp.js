import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import colors from "../../assets/sass/colors";
import TulipLogo from '../../assets/img/workLogos/tulipIcon.png';
import PivotalLogo from '../../assets/img/workLogos/pivotallabsLogoIcon.svg';
import OpentextLogo from '../../assets/img/workLogos/opentextLogoIcon.png';
import AccedoLogo from '../../assets/img/workLogos/AccedoLogoIcon.png';
import BlaiseLogo from '../../assets/img/workLogos/b-rgb.png';
import LifionLogo from '../../assets/img/workLogos/lifionLogoIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './WorkExp.scss';


class Projects extends Component {
    render() {

        const jobTitles = [
            {
                img: LifionLogo,
                title: 'Technical Product Owner',
                company: 'Lifion by ADP',
                subtitle: 'driving and roadmapping new features to better enable HCM customers',
                id: 'lifion',
                url: 'https://lifion.com/'
            }, {
                img: BlaiseLogo,
                title: 'Software Developer',
                company: 'Blaise Transit',
                subtitle: 'implementing UI components and integrating external APIs with UX best practices',
                id: 'blaise',
                url: 'https://www.blaisetransit.com/'
            }, {
                img: TulipLogo,
                title: 'Product Manager Intern',
                company: 'Tulip Retail',
                subtitle: 'improving existing modules to better meet customer requirements',
                id: 'tulip',
                url: 'https://tulip.com/'
            }, {
                img: AccedoLogo,
                title: 'Product Integration Engineer',
                company: 'Accedo',
                subtitle: 'designing user interfaces to meet customer requirements',
                id: 'accedo',
                url: 'https://www.accedo.tv/'
            }, {
                img: OpentextLogo,
                title: 'Software Developer',
                company: 'Opentext Corporation',
                subtitle: 'enhancing internal framework functions improving product robustness',
                id: 'opentext',
                url: 'https://www.opentext.com/products-and-solutions/products/customer-experience-management/customer-communications-management/opentext-exstream'
            },
            {
                img: PivotalLogo,
                title: 'Agile Test Engineer',
                company: 'Pivotal Labs',
                subtitle: 'automating ui tests to catch regression bugs in continuous integration',
                id: 'pivotal',
                url: 'https://pivotal.io/labs'
            },

        ]
        return (
            <Box className="jobsContainer" id="experience" display="flex" flexDirection="column" flexWrap="wrap" justifyItems="space-evenly" alignContent="center">
                <Box className="title" display="flex" justifyContent="center">
                    <Box display="flex" className='titleText'>Experience</Box>
                </Box>
                <Box alignSelf="center">


                    {jobTitles.map((job) =>
                        <Box key={job.id} py={1} px={2} className="job leftAlign" justifyContent="flex-start" display="flex" alignItems="center"
                            onClick={() => window.open(job.url, "_blank")}>
                            <img src={job.img} className="jobImg" alt="" />
                            <Box flexDirection="column" display="flex" justifyContent="center" m={3}>
                                <Box display="flex" className="jobDetails">
                                    <div style={{ color: colors.turquoise }}>{job.title},&nbsp;</div>
                                    <Box display="flex" flexDirection="row" >
                                        <div className="italic">{job.company}</div>
                                        <FontAwesomeIcon className="mobileLinkout" icon={faExternalLinkAlt} color={colors.turquoise} />
                                    </Box>
                                </Box>
                                <div style={{ fontSize: '12pt' }}>{job.subtitle}</div>
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="flex-end">
                                <FontAwesomeIcon className="linkout" icon={faExternalLinkAlt} color={colors.turquoise} />
                            </Box>
                        </Box>)
                    }</Box>
            </Box>
        )
    }
}

export default Projects;