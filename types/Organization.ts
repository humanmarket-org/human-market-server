import Person from './Person';
import Money from './money/Money';
import WithdrawalRequest, { WithdrawalPlatform } from './money/WithdrawalRequest';

export default class Organization {
  name: string;
  administration: OrganizationAdministration[];
  projects: Project[];
  withdrawalPlatforms: WithdrawalPlatform[];
  withdrawalRequests: WithdrawalRequest[];
}

export class OrganizationAdministration {
  person: Person;
  role: 'base' | 'admin';
}

export class Project {
  title: string;
  description: string;
  url: string;
  dueAt?: Date;
  fundingTarget: Money;
  currentFunding: Money;
}
export type FundingDistribution = [number, Organization][];
