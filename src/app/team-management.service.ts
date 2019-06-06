import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Team } from './team';
import { ALL_TEAMS, ALL_SKILLS } from './team-data';

@Injectable()
export class TeamManagementService { 
    getSkills() {
	    return Observable.of(ALL_SKILLS);		
	}
	getAllTeams(): Observable<Team[]> {
	    return Observable.of(ALL_TEAMS);
	}
	getTeamByName(name: string): Observable<Team> {
           return this.getAllTeams()
            .map(allTeams => allTeams.find(team => team.teamName === name));
    }
    saveTeam(team: Team) {
		console.log('------------TEAM------------');
		console.log('Team Name: '+ team.teamName);
		console.log('Team Manager: '+ team.teamManager);
		console.log('Dept Head: '+ team.teamDept.deptHead);
		console.log('Dept Name: '+ team.teamDept.deptName);
		console.log('----- Employee Detail -----');
		for(let emp of team.employees) {
			console.log('Emp Id: '+ emp.empId);
			console.log('Emp Name: '+ emp.empName);
			console.log('Emp Skill: '+ emp.skill);		
            console.log('-------------------');			
		}
	}		
}