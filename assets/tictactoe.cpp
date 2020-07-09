//TIC TAC TOE GAME
#include<iostream>
#include<cstring>
#include<stdlib.h>
using namespace std;
char square[9] = {'N','N','N','N','N','N','N','N','N'};
//0 1 2
//3 4 5
//6 7 8
int active = 1;
int player_no =1;
void ans(char o, char t,char th){
	printf("    |     |    \n  %c |  %c  |   %c  \n    |     |  \n",o,t,th);
	}
void status(){
		cout<<"------------------------------------------------------------"<<endl;
		cout<<"Player "<<player_no<<endl;
		for(int i = 0;i<5;i++){
				if(i%2!=0){//1,3,5
					cout<<"-----------------"<<endl;
					}
				else{//0,2,4
					ans(square[3*i/2],square[1+(3*i/2)],square[2+(3*i/2)]);//0,1,2
					//
					}
		}
}
//0 1 2
//3 4 5
//6 7 8
void winner(){
	for(int i = 0;i<3;i++){//
		if(square[3*i] == square[3*i+1] and square[3*i+1] == square[3*i + 2] and square[3*i]!='N'){
				system("clear");
				active = 0;
				cout<<"Winner player: "<<player_no<<endl;
						}else if(square[i]==square[i+3] and square[i+3]==square[i+6] and square[i]!='N'){
				system("clear");
				active = 0;
				cout<<"Winner player"<<player_no<<endl;
			}else if(i==2){
					if(square[i]==square[i+2] and square[i+2]==square[i+4] and square[i]!='N'){
						system("clear");
						active = 0;
						cout<<"Winner player"<<player_no<<endl;			
						}
				}else if(i==0){
					if(square[i]==square[i+4] and square[i+8]==square[i+4] and square[i]!='N'){
							system("clear");
							active = 0;
							cout<<"Winner player"<<player_no<<endl;
						}
					}
	}}

void modifier(int x,int y,char in){
		system("clear");
		cout<<"CHOOSEN---> "<<in<<"\n\n";
		cout<<"Editing square no. "<<((x-1)+3*(y-1))<<endl;
		square[(x-1)+3*(y-1)] = in;
		cout<<"with value"<<square[((x-1)+3*(y-1))]<<endl;
		status();
		}

void input(){
	int x,y;char in;
	printf("Enter the x,y of shell: \n");
	scanf("%d%d",&x,&y);
	if(x<4 and y<4 and (square[((x-1)+3*(y-1))]=='N')){
	cout<<"Selected "<<x<<", "<<y<<endl;
	if(player_no==1){
		in='X';
		}else{
			in='O';
			}
	modifier(x,y,in);
	}else{cout<<"Wrong Input\n";}
	}

int main(){
	status();
	while(active == 1){
	if(player_no==2){
		player_no=1;
		}else{
			player_no=2;
			}
	input();
	winner();
	}
	return 0;
}
