export type TMDBMovieCredits = {
  id: number;
  cast: TMDBCastMember[];
  crew: TMDBCastMember[];
};

export type TMDBCastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: TMDBCastDepartment;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: TMDBCastDepartment;
  job?: string;
};

export enum TMDBCastDepartment {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Lighting = 'Lighting',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing'
}
